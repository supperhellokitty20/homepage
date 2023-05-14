import fs from 'fs'
import {join} from 'path'

const postDir = join(process.cwd(),'_posts') 

/**
 *  Retrieve all posts id/slugs 
 */
export function getPostsSlugs() { 
    return fs.readdirSync(postDir)
}


