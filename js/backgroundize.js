document.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector(".banner");
  const webBg = document.querySelector("#web_bg");

  // 提取 banner 背景图 URL
  const bannerBg = banner?.style?.background;
  const url = bannerBg?.split(" ")[0];

  // 设置全屏背景图
  if (url && webBg) {
    webBg.setAttribute("style", `
      background-image: ${url};
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-size: cover;
      background-position: center;
    `);
  }

  // 清除遮罩颜色和 banner 背景色
  if (banner) {
    banner.style.backgroundColor = "transparent";
  }

  const mask = document.querySelector("#banner .mask");
  if (mask) {
    mask.style.backgroundColor = "transparent";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector(".banner");
  const webBg = document.querySelector("#web_bg");

  // 设置全屏背景图
  if (banner && webBg) {
    const url = banner.style.background.split(" ")[0];
    webBg.style.cssText = `
      background-image: ${url};
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-size: cover;
      background-position: center;
    `;
  }

  // 清除内联背景色
  if (banner) {
    banner.style.backgroundColor = "transparent";
    banner.style.setProperty("background-color", "transparent", "important");
  }
});
