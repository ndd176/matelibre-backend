# Mate Libre - Strapi Content Types Plan

## 🎯 Content Types cần tạo:

### 1. **Products** (Sản phẩm)

- name (Text)
- description (Rich Text)
- price (Number)
- image (Media)
- category (Relation to Category)
- featured (Boolean)
- slug (UID)

### 2. **Categories** (Danh mục sản phẩm)

- name (Text)
- description (Text)
- slug (UID)
- image (Media)

### 3. **Hero Slides** (Slides cho hero section)

- title (Text)
- subtitle (Text)
- backgroundImage (Media)
- ctaText (Text)
- ctaLink (Text)
- order (Number)

### 4. **Moments** (Cho MomentsList component)

- text (Text)
- image (Media)
- position (JSON - {top, left})

### 5. **Testimonials** (Lời chứng thực)

- name (Text)
- role (Text)
- content (Text)
- avatar (Media)
- rating (Number)

### 6. **Team Members** (Thành viên team)

- name (Text)
- position (Text)
- bio (Rich Text)
- photo (Media)
- socialLinks (JSON)

### 7. **FAQ** (Câu hỏi thường gặp)

- question (Text)
- answer (Rich Text)
- category (Text)
- order (Number)

### 8. **Pages** (Trang nội dung)

- title (Text)
- slug (UID)
- content (Dynamic Zone)
- seoTitle (Text)
- seoDescription (Text)
- featuredImage (Media)

### 9. **Settings** (Cài đặt website)

- siteName (Text)
- siteDescription (Text)
- logo (Media)
- favicon (Media)
- socialLinks (JSON)
- contactInfo (JSON)

### 10. **Blog Posts** (Bài viết blog)

- title (Text)
- slug (UID)
- content (Rich Text)
- excerpt (Text)
- featuredImage (Media)
- author (Relation to User)
- categories (Relation to Category)
- publishedAt (DateTime)

## 🔧 Cấu hình bổ sung:

- CORS để kết nối với frontend
- API permissions
- Media library settings
- User roles and permissions
