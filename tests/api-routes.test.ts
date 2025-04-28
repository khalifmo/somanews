import { NextRequest, NextResponse } from "next/server";

// Mock function to simulate API response
async function mockAPITest(endpoint: string, method: string = 'GET', body: any = null) {
  console.log(`Testing API endpoint: ${endpoint} with method: ${method}`);
  
  try {
    // Create mock request
    const request = {
      url: `http://localhost:3000${endpoint}`,
      method,
      json: async () => body,
    } as unknown as NextRequest;
    
    // Import the API route handler dynamically
    let routeModule;
    
    if (endpoint.startsWith('/api/stories/') && endpoint !== '/api/stories/') {
      // For dynamic routes like /api/stories/[storyId]
      const storyId = endpoint.split('/').pop();
      routeModule = await import(`../src/app/api/stories/[storyId]/route`);
      // Mock the params object for dynamic routes
      const params = { params: { storyId } };
      return await routeModule.GET(request, params);
    } else {
      // For static routes
      const path = endpoint.replace(/^\/api\//, '../src/app/api/');
      routeModule = await import(`${path}/route`);
      return method === 'GET' 
        ? await routeModule.GET(request)
        : await routeModule.POST(request);
    }
  } catch (error) {
    console.error(`Error testing ${endpoint}:`, error);
    return new NextResponse(
      JSON.stringify({ error: `Failed to test ${endpoint}`, details: error.message }),
      { status: 500 }
    );
  }
}

// Main test function
async function testAPIRoutes() {
  console.log("Starting API route tests...");
  
  // Test /api/stories endpoint
  const storiesResponse = await mockAPITest('/api/stories');
  const storiesData = await storiesResponse.json();
  console.log("Stories API response:", 
    storiesData.stories ? `Success! Found ${storiesData.stories.length} stories` : "Failed to get stories");
  
  // Test /api/sources endpoint
  const sourcesResponse = await mockAPITest('/api/sources');
  const sourcesData = await sourcesResponse.json();
  console.log("Sources API response:", 
    sourcesData.sources ? `Success! Found ${sourcesData.sources.length} sources` : "Failed to get sources");
  
  // Test /api/blindspots endpoint
  const blindspotsResponse = await mockAPITest('/api/blindspots');
  const blindspotsData = await blindspotsResponse.json();
  console.log("Blindspots API response:", 
    blindspotsData.blindspots ? `Success! Found ${blindspotsData.blindspots.length} blindspots` : "Failed to get blindspots");
  
  // Test /api/stories/[storyId] endpoint (if we have a story)
  if (storiesData.stories && storiesData.stories.length > 0) {
    const storyId = storiesData.stories[0].id;
    const storyDetailResponse = await mockAPITest(`/api/stories/${storyId}`);
    const storyDetailData = await storyDetailResponse.json();
    console.log("Story Detail API response:", 
      storyDetailData.story ? `Success! Got details for story ${storyId}` : "Failed to get story details");
  } else {
    console.log("Skipping story detail test as no stories were found");
  }
  
  console.log("API route tests completed!");
}

// Run the tests
testAPIRoutes().catch(console.error);
