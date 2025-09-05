// scripts/buildPublications.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
const contentDir = path.join(process.cwd(), 'posts');
const targetFile = path.join(process.cwd(), 'src', 'posts.json');

function buildPublications() {
    try {
        if (!fs.existsSync(contentDir)) {
            console.log(`Directory not found: ${contentDir}. Creating empty publications file.`);
            fs.mkdirSync(contentDir, { recursive: true });
            fs.mkdirSync(path.dirname(targetFile), { recursive: true });
            fs.writeFileSync(targetFile, JSON.stringify([]), 'utf8');
            return;
        }

        const files = fs.readdirSync(contentDir);

        const allPublicationsData = files
            .filter(file => file.endsWith('.md'))
            .map(filename => {
                const slug = filename.replace(/\.md$/, '');
                const filePath = path.join(contentDir, filename);
                const fileContents = fs.readFileSync(filePath, 'utf8');

                const { data: frontmatter } = matter(fileContents);

                return {
                    id: slug,
                    title: frontmatter.title || slug,
                    year:
                        typeof frontmatter.year === 'number'
                            ? frontmatter.year
                            : frontmatter.year
                                ? Number(frontmatter.year)
                                : undefined,
                    excerpt: frontmatter.excerpt || frontmatter.description || '',
                    ...frontmatter
                };
            });

        // Safer sort (missing year treated as 0)
        allPublicationsData.sort((a, b) => (b.year ?? 0) - (a.year ?? 0));

        // Ensure target dir exists
        fs.mkdirSync(path.dirname(targetFile), { recursive: true });
        fs.writeFileSync(targetFile, JSON.stringify(allPublicationsData, null, 2), 'utf8');

        console.log(`✅ Built ${allPublicationsData.length} publications to ${targetFile}`);
    } catch (err) {
        console.error('❌ Error building publications:', err);
        try {
            fs.mkdirSync(path.dirname(targetFile), { recursive: true });
            fs.writeFileSync(targetFile, JSON.stringify([]), 'utf8');
        } catch (e) {
            console.error('❌ Could not write fallback posts.json:', e);
        }
        process.exitCode = 1;
    }
}

buildPublications();


export default buildPublications;