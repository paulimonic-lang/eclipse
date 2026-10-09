import fs from 'node:fs';
import path from 'node:path';

const images = {
  'slider-1.jpg': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2023/02/slider-4-1.jpg',
  'slider-2.jpg': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2023/02/slider-4-2.jpg',
  'slider-3.jpg': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2023/02/slider-4-3.jpg',
  'about-video.png': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2023/01/about-4-1.png',
  'feat-1.jpg': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2023/01/other-ser-2.jpg',
  'feat-2.jpg': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2023/01/other-ser-3.jpg',
  'feat-3.jpg': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2023/01/other-ser-1.jpg',
  'service-bg.jpg': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2023/01/ser-bg-h4-min.jpg',
  'call-bg.jpg': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2023/01/call-bg-h4-min.jpg',
  'call-1.png': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2023/01/call-1-min.png',
  'call-2.png': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2023/01/call-2-min.png',
  'pro-1.jpg': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2023/01/pro-h4-1-min.jpg',
  'pro-2.jpg': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2023/01/pro-h4-2-min.jpg',
  'pro-3.jpg': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2023/01/pro-h4-3-min.jpg',
  'pro-4.jpg': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2023/01/pro-h4-4-min.jpg',
  'choose-us.jpg': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2023/01/abh4-2-min.jpg',
  'form-bg.jpg': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2023/03/bg-3.jpg',
  'form-agent.png': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2023/01/about-1-min.png',
  'badge-icon-1.png': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2023/01/icon-image-1.png',
  'badge-icon-2.png': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2023/01/icon-image-2.png',
  'client-1.png': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2022/12/client-1.png',
  'client-2.png': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2022/12/client-2.png',
  'client-3.png': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2022/12/client-3.png',
  'client-4.png': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2022/12/client-4.png',
  'client-5.png': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2022/12/client-5.png',
  'client-6.png': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2022/12/client-6.png',
  'test-an.png': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2023/01/an-1-min.png',
  'test-1.png': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2023/01/test-1-min.png',
  'test-2.png': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2023/01/test-2-min.png',
  'test-3.png': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2023/01/test-3-min.png',
  'blog-1.png': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2023/01/blog-9-min.png',
  'blog-2.png': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2023/01/blog-8-min.png',
  'blog-3.png': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2023/01/blog-7-min.png',
  'cta-pattern.jpg': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2023/01/g.jpg',
  'cta-person.png': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2022/12/sub-1-min.png',
  'footer-map.png': 'https://themepanthers.com/wp/vankine/v1/wp-content/uploads/2022/12/Map.png'
};

const dir = path.resolve('public/images');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function downloadAll() {
  for (const [name, url] of Object.entries(images)) {
    const dest = path.join(dir, name);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log(`Already exists: ${name}`);
      continue;
    }
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(dest, buffer);
      console.log(`Downloaded: ${name} (${(buffer.length / 1024).toFixed(1)} KB)`);
    } catch (e) {
      console.error(`Failed ${name}: ${e.message}`);
    }
  }
}

downloadAll();
