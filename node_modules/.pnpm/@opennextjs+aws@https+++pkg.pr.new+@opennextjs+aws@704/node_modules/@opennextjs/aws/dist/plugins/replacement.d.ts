import type { Plugin } from "esbuild";
export interface IPluginSettings {
    target: RegExp;
    replacements?: string[];
    deletes?: string[];
    name?: string;
}
/**
 *
 * openNextPlugin({
 *   target: /plugins(\/|\\)default\.js/g,
 *   replacements: [require.resolve("./plugins/default.js")],
 *   deletes: ["id1"],
 * })
 *
 * To inject arbitrary code by using (import at top of file):
 *
 * //#import
 *
 * import data from 'data'
 * const datum = data.datum
 *
 * //#endImport
 *
 * To replace code:
 *
 * //#override id1
 *
 * export function overrideMe() {
 *    // I will replace the "id1" block in the target file
 * }
 *
 * //#endOverride
 *
 *
 * @param opts.target - the target file to replace
 * @param opts.replacements - list of files used to replace the imports/overrides in the target
 *                          - the path is absolute
 * @param opts.deletes - list of ids to delete from the target
 * @returns
 */
export declare function openNextReplacementPlugin({ target, replacements, deletes, name, }: IPluginSettings): Plugin;
