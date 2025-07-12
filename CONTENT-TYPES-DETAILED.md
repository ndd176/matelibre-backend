# Content Types Schema cho Strapi Admin

## 🎯 Content Types cần tạo dựa trên Frontend Components

### 1. **Hero Slides** (cho ParallaxHero component)

```json
{
  "displayName": "Hero Slide",
  "singularName": "hero-slide",
  "pluralName": "hero-slides",
  "fields": {
    "word": {
      "type": "string",
      "required": true,
      "description": "Text hiển thị trên slide (VD: 'of energy', 'of nature')"
    },
    "image": {
      "type": "media",
      "multiple": false,
      "required": true,
      "allowedTypes": ["images"]
    },
    "order": {
      "type": "integer",
      "required": true,
      "description": "Thứ tự hiển thị slide"
    }
  }
}
```

### 2. **Products** (cho PositionCarousel và ProductCard)

```json
{
  "displayName": "Product",
  "singularName": "product",
  "pluralName": "products",
  "fields": {
    "title": {
      "type": "string",
      "required": true
    },
    "description": {
      "type": "richtext"
    },
    "price": {
      "type": "decimal"
    },
    "image": {
      "type": "media",
      "multiple": false,
      "allowedTypes": ["images"]
    },
    "category": {
      "type": "relation",
      "relation": "manyToOne",
      "target": "api::category.category"
    },
    "featured": {
      "type": "boolean",
      "default": false
    },
    "slug": {
      "type": "uid",
      "targetField": "title"
    }
  }
}
```

### 3. **Categories**

```json
{
  "displayName": "Category",
  "singularName": "category",
  "pluralName": "categories",
  "fields": {
    "name": {
      "type": "string",
      "required": true
    },
    "description": {
      "type": "text"
    },
    "slug": {
      "type": "uid",
      "targetField": "name"
    },
    "image": {
      "type": "media",
      "multiple": false,
      "allowedTypes": ["images"]
    }
  }
}
```

### 4. **Moments** (cho MomentsList component)

```json
{
  "displayName": "Moment",
  "singularName": "moment",
  "pluralName": "moments",
  "fields": {
    "text": {
      "type": "string",
      "required": true,
      "description": "Text hiển thị trên moment (VD: 'Sip. Smile. Repeat.')"
    },
    "image": {
      "type": "media",
      "multiple": false,
      "required": true,
      "allowedTypes": ["images"]
    },
    "topPosition": {
      "type": "integer",
      "required": true,
      "description": "Vị trí top (pixels)"
    },
    "leftPosition": {
      "type": "integer",
      "required": true,
      "description": "Vị trí left (pixels)"
    }
  }
}
```

### 5. **Testimonials** (cho Testimonial component)

```json
{
  "displayName": "Testimonial",
  "singularName": "testimonial",
  "pluralName": "testimonials",
  "fields": {
    "name": {
      "type": "string",
      "required": true
    },
    "role": {
      "type": "string"
    },
    "content": {
      "type": "text",
      "required": true
    },
    "avatar": {
      "type": "media",
      "multiple": false,
      "allowedTypes": ["images"]
    },
    "rating": {
      "type": "integer",
      "min": 1,
      "max": 5,
      "default": 5
    }
  }
}
```

### 6. **FAQ** (cho FAQSection component)

```json
{
  "displayName": "FAQ",
  "singularName": "faq",
  "pluralName": "faqs",
  "fields": {
    "question": {
      "type": "string",
      "required": true
    },
    "answer": {
      "type": "richtext",
      "required": true
    },
    "category": {
      "type": "string",
      "description": "Danh mục câu hỏi (VD: 'Product', 'Shipping', 'General')"
    },
    "order": {
      "type": "integer",
      "description": "Thứ tự hiển thị"
    }
  }
}
```

### 7. **Team Members** (cho CommunitySection)

```json
{
  "displayName": "Team Member",
  "singularName": "team-member",
  "pluralName": "team-members",
  "fields": {
    "name": {
      "type": "string",
      "required": true
    },
    "position": {
      "type": "string",
      "required": true
    },
    "bio": {
      "type": "richtext"
    },
    "photo": {
      "type": "media",
      "multiple": false,
      "allowedTypes": ["images"]
    },
    "socialLinks": {
      "type": "json",
      "description": "Object chứa các link social: {linkedin: '', twitter: '', instagram: ''}"
    }
  }
}
```

### 8. **Positions** (cho PositionCarousel - careers)

```json
{
  "displayName": "Position",
  "singularName": "position",
  "pluralName": "positions",
  "fields": {
    "title": {
      "type": "string",
      "required": true
    },
    "department": {
      "type": "string",
      "required": true
    },
    "location": {
      "type": "string",
      "required": true
    },
    "type": {
      "type": "enumeration",
      "enum": ["full-time", "part-time", "contract", "internship"]
    },
    "description": {
      "type": "richtext",
      "required": true
    },
    "requirements": {
      "type": "json",
      "description": "Array của các yêu cầu công việc"
    },
    "benefits": {
      "type": "json",
      "description": "Array của các quyền lợi"
    },
    "salaryRange": {
      "type": "string"
    },
    "isActive": {
      "type": "boolean",
      "default": true
    }
  }
}
```

### 9. **Commitments** (cho CommitmentSection)

```json
{
  "displayName": "Commitment",
  "singularName": "commitment",
  "pluralName": "commitments",
  "fields": {
    "icon": {
      "type": "string",
      "required": true,
      "description": "Tên icon hoặc emoji"
    },
    "title": {
      "type": "string",
      "required": true
    },
    "description": {
      "type": "text",
      "required": true
    },
    "order": {
      "type": "integer",
      "description": "Thứ tự hiển thị"
    }
  }
}
```

### 10. **Site Settings** (Single Type)

```json
{
  "displayName": "Site Setting",
  "singularName": "site-setting",
  "kind": "singleType",
  "fields": {
    "siteName": {
      "type": "string",
      "required": true,
      "default": "Mate Libre"
    },
    "logo": {
      "type": "media",
      "multiple": false,
      "allowedTypes": ["images"]
    },
    "favicon": {
      "type": "media",
      "multiple": false,
      "allowedTypes": ["images"]
    },
    "contactEmail": {
      "type": "email"
    },
    "contactPhone": {
      "type": "string"
    },
    "address": {
      "type": "text"
    },
    "socialLinks": {
      "type": "json",
      "description": "Object chứa social links"
    },
    "seoDefaults": {
      "type": "json",
      "description": "Default SEO settings"
    }
  }
}
```

### 11. **Contact Submissions** (để lưu form contact)

```json
{
  "displayName": "Contact Submission",
  "singularName": "contact-submission",
  "pluralName": "contact-submissions",
  "fields": {
    "name": {
      "type": "string",
      "required": true
    },
    "email": {
      "type": "email",
      "required": true
    },
    "subject": {
      "type": "string"
    },
    "message": {
      "type": "text",
      "required": true
    },
    "isRead": {
      "type": "boolean",
      "default": false
    }
  }
}
```

### 12. **Newsletter Subscriptions**

```json
{
  "displayName": "Newsletter Subscription",
  "singularName": "newsletter-subscription",
  "pluralName": "newsletter-subscriptions",
  "fields": {
    "email": {
      "type": "email",
      "required": true,
      "unique": true
    },
    "isActive": {
      "type": "boolean",
      "default": true
    }
  }
}
```

## 🔧 Hướng dẫn tạo trong Strapi Admin:

1. **Vào Content-Type Builder**
2. **Tạo từng Collection Type** theo schema trên
3. **Tạo Site Setting như Single Type**
4. **Cấu hình Relations** giữa Product và Category
5. **Set permissions** cho Public role để frontend có thể fetch data
6. **Thêm sample data** để test

## 📝 Sample Data cần thêm:

- 3-5 Hero Slides với các từ khóa như "of energy", "of nature", "of creativity"
- Vài sản phẩm mẫu với hình ảnh
- 5-10 Moments cho hiệu ứng floating
- Vài testimonials
- FAQ cơ bản
- Team members
- Commitments về sustainability, community, etc.
