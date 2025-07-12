# 🚀 IMPLEMENTATION GUIDE - Kết nối Frontend với Strapi Backend

## 📋 Các bước thực hiện:

### BƯỚC 1: Hoàn thiện Strapi Backend

#### 1.1 Tạo Content Types trong Strapi Admin

```bash
# Truy cập: http://localhost:1337/admin
# Tạo từng Content Type theo CONTENT-TYPES-DETAILED.md
```

**Thứ tự tạo:**

1. Categories (tạo trước)
2. Products (có relation với Categories)
3. Hero Slides
4. Moments
5. Testimonials
6. FAQ
7. Team Members
8. Positions
9. Commitments
10. Site Settings (Single Type)
11. Contact Submissions
12. Newsletter Subscriptions

#### 1.2 Cấu hình Permissions

```
Settings > Users & Permissions Plugin > Roles > Public
✅ Enable: find, findOne cho tất cả Content Types
❌ Disable: create, update, delete (trừ contact-submissions và newsletter-subscriptions)
```

#### 1.3 Thêm Sample Data

- Upload vài hình ảnh vào Media Library
- Tạo 3-5 Hero Slides với text như "of energy", "of nature"
- Tạo vài Products mẫu
- Tạo 5-10 Moments với position khác nhau
- Thêm FAQ, Testimonials, Team Members

### BƯỚC 2: Sao chép API Service vào Frontend

#### 2.1 Tạo file API service

```bash
# Copy nội dung từ FRONTEND-SPECIFIC-API.ts vào:
cp FRONTEND-SPECIFIC-API.ts ../matelibre-clone/src/lib/strapiAPI.ts
```

#### 2.2 Tạo React Hooks

```bash
# Copy nội dung từ REACT-HOOKS-TEMPLATE.ts vào:
cp REACT-HOOKS-TEMPLATE.ts ../matelibre-clone/src/lib/hooks/useStrapi.ts
```

#### 2.3 Thêm Environment Variables

```bash
# Trong matelibre-clone/.env.local
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

### BƯỚC 3: Update Frontend Components

#### 3.1 Update ParallaxHero.tsx

```tsx
// Thay thế static data bằng:
import { useHeroSlides } from '@/lib/hooks/useStrapi'

export default function ParallaxHero() {
  const { data: slides, loading } = useHeroSlides()

  if (loading) return <div>Loading...</div>

  // Use slides data thay vì static slides array
  return (
    // Component JSX với data từ Strapi
  )
}
```

#### 3.2 Update PositionCarousel.tsx

```tsx
import { useProducts } from "@/lib/hooks/useStrapi";

export default function PositionCarousel() {
  const { data: products, loading } = useProducts({ featured: true, limit: 6 });

  // Use products data
}
```

#### 3.3 Update MomentsList.tsx

```tsx
import { useMoments } from "@/lib/hooks/useStrapi";

export default function MomentsList() {
  const { data: moments, loading } = useMoments();

  // Replace static momentsData với moments từ Strapi
}
```

#### 3.4 Update other components tương tự

### BƯỚC 4: Test và Debug

#### 4.1 Test API endpoints

```bash
# Test trong browser:
http://localhost:1337/api/products
http://localhost:1337/api/hero-slides
http://localhost:1337/api/moments
```

#### 4.2 Test Frontend

```bash
cd matelibre-clone
npm run dev
# Check console for any errors
```

### BƯỚC 5: Advanced Features

#### 5.1 Add Search functionality

```tsx
// Trong API service thêm:
async searchProducts(query: string): Promise<Product[]> {
  const response = await this.fetchAPI<StrapiResponse<StrapiItem[]>>(
    `/products?filters[title][$containsi]=${query}&populate=*`
  )
  return this.formatStrapiArray(response)
}
```

#### 5.2 Add Pagination

```tsx
const {
  data: products,
  loading,
  meta,
} = useProducts({
  pagination: { page: 1, pageSize: 10 },
});
```

#### 5.3 Add Filtering

```tsx
const { data: products } = useProducts({
  category: "yerba-mate",
  featured: true,
});
```

## 🎯 Mapping Frontend Components → Strapi Content Types

| Frontend Component | Strapi Content Type | API Hook          |
| ------------------ | ------------------- | ----------------- |
| ParallaxHero       | hero-slides         | useHeroSlides()   |
| PositionCarousel   | products            | useProducts()     |
| ProductCard        | products            | useProduct(slug)  |
| MomentsList        | moments             | useMoments()      |
| CommitmentSection  | commitments         | useCommitments()  |
| CommunitySection   | team-members        | useTeamMembers()  |
| FAQSection         | faqs                | useFAQs()         |
| Testimonial        | testimonials        | useTestimonials() |
| Footer             | site-setting        | useSiteSettings() |
| Header             | site-setting        | useSiteSettings() |

## 🔧 Sample Code cho từng Component

### ParallaxHero với Strapi data:

```tsx
"use client";
import { useHeroSlides } from "@/lib/hooks/useStrapi";

export default function ParallaxHero() {
  const { data: slides, loading, error } = useHeroSlides();

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="relative h-screen overflow-hidden">
      {slides?.map((slide, index) => (
        <div key={slide.id} className={`slide-${index}`}>
          <img src={slide.image} alt={slide.word} />
          <h2>{slide.word}</h2>
        </div>
      ))}
    </section>
  );
}
```

### MomentsList với Strapi data:

```tsx
"use client";
import { useMoments } from "@/lib/hooks/useStrapi";
import FloatingImage from "../ui/FloatingImage";

export default function MomentsList() {
  const { data: moments, loading } = useMoments();

  if (loading) return <div>Loading moments...</div>;

  return (
    <div className="relative w-full h-[600vh] bg-white">
      {moments?.map((moment, index) => (
        <FloatingImage
          key={moment.id}
          src={moment.image}
          alt={`Moment ${index}`}
          style={{
            top: moment.topPosition,
            left: moment.leftPosition,
          }}
        >
          <p className="text-white text-2xl font-bold">{moment.text}</p>
        </FloatingImage>
      ))}
    </div>
  );
}
```

## 🚨 Common Issues & Solutions

1. **CORS Error**: Đảm bảo đã cấu hình CORS trong middlewares.ts
2. **Permission Error**: Check Public role permissions trong Strapi Admin
3. **Image URLs**: Dùng helper function getStrapiImageURL()
4. **TypeScript Errors**: Import đúng types từ strapiAPI.ts

## 📈 Performance Optimization

1. **Caching**: Implement React Query hoặc SWR
2. **Image Optimization**: Dùng Next.js Image component
3. **Lazy Loading**: Load components khi cần
4. **API Optimization**: Chỉ populate fields cần thiết
