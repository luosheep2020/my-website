# Wenjie Portfolio

WENJIE LUO 的个人作品集，使用 Next.js、React、TypeScript 和 Once UI。

## 开发

使用 Node.js 22：

```bash
nvm use 22
npm ci
npm run dev
```

`npm run typecheck` 检查类型，`npm run build` 构建，`npm start` 启动生产服务。

## 内容编辑

- `src/data/person.ts`：姓名、头像、语言、技能、邮箱。
- `src/data/about.tsx`：Introduction、工作经历、教育和技能介绍。
- `src/data/social.ts`：真实社交链接，当前为空。
- `content/blog/`：博客 MDX 文件。
- `content/projects/`：作品 MDX 文件。
- `src/data/gallery.ts`：图库图片列表。
- `src/config/site.ts`：导航开关、样式、站点元数据。
- `public/images/avatar.jpg`：头像，导入后自动生成带内容版本的地址。

网站根路径跳转至 `/about`。Work、Blog、Gallery 保留为空页面，About 保留板块标题。

## 部署

设置 `NEXT_PUBLIC_SITE_URL` 为完整正式域名（含 `https://`）。Vercel 上未设置时使用
`NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL`，本地默认 `http://localhost:3000`。
环境变量示例见 `.env.example`，修改后重新构建部署。

## 来源与许可

基于 [Magic Portfolio](https://github.com/once-ui-system/magic-portfolio)（Once UI / Lorant One）修改。
已修改目录结构、个人内容、导航、头像加载及模板功能。原模板许可证见 [LICENSE](LICENSE)。
