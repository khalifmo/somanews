import fs from "node:fs";
declare const _default: {
    name: string;
    load: (url: string) => Promise<{
        body: fs.ReadStream;
        contentType: string;
        cacheControl: string;
    }>;
};
export default _default;
