# Content Types Creation Guide

## 📋 Hướng dẫn tạo Content Types trong Strapi Admin

Sau khi tạo xong admin account, hãy làm theo các bước sau:

### 1. Tạo Content Type: **Product**

1. Vào **Content-Type Builder**
2. Click **Create new collection type**
3. Display name: `Product`
4. Thêm các fields:
   - `name` (Text) - Required
   - `description` (Rich Text)
   - `price` (Number - Decimal)
   - `image` (Media - Single media)
   - `featured` (Boolean)
   - `slug` (UID - target field: name)

### 2. Tạo Content Type: **Category**

1. Display name: `Category`
2. Fields:
   - `name` (Text) - Required
   - `description` (Text)
   - `slug` (UID - target field: name)
   - `image` (Media - Single media)

### 3. Thêm Relation giữa Product và Category

1. Vào edit Product content type
2. Thêm field `category` (Relation)
3. Chọn: Product has one Category

### 4. Tạo Content Type: **Hero Slide**

1. Display name: `Hero Slide`
2. Fields:
   - `title` (Text) - Required
   - `subtitle` (Text)
   - `backgroundImage` (Media - Single media)
   - `ctaText` (Text)
   - `ctaLink` (Text)
   - `order` (Number - Integer)

### 5. Tạo Content Type: **Moment**

1. Display name: `Moment`
2. Fields:
   - `text` (Text) - Required
   - `image` (Media - Single media)
   - `topPosition` (Number - Integer)
   - `leftPosition` (Number - Integer)

### 6. Cấu hình Permissions

1. Vào **Settings > Users & Permissions Plugin > Roles > Public**
2. Cho phép `find` và `findOne` cho tất cả Content Types
3. Save

## 🔄 Restart Strapi sau khi tạo xong

Sau khi tạo content types, restart Strapi server để áp dụng thay đổi.
