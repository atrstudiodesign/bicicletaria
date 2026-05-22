import https from "https";

const baseUrl = "https://www.r3bikeshop.com";
const filename = "COMPRADORES%20R3BIKESHOP%20(1).jpg";

const paths = [
  `/uploads/entregas/${filename}`,
  `/public/uploads/entregas/${filename}`,
  `/dist/public/uploads/entregas/${filename}`,
  `/client/public/uploads/entregas/${filename}`,
  `/assets/uploads/entregas/${filename}`,
  `/wp-content/uploads/entregas/${filename}`, // Just a guess
  `/images/uploads/entregas/${filename}`,
];

const checkUrl = path => {
  return new Promise(resolve => {
    const options = {
      method: "HEAD",
      host: "www.r3bikeshop.com",
      path: path,
    };

    const req = https.request(options, res => {
      console.log(`${path}: ${res.statusCode} ${res.headers["content-type"]}`);
      resolve();
    });

    req.on("error", e => {
      console.log(`${path}: Error ${e.message}`);
      resolve();
    });

    req.end();
  });
};

async function probe() {
  for (const p of paths) {
    await checkUrl(p);
  }
}

probe();
