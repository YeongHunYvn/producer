# 작곡가 윤영훈 포트폴리오

## 로컬 실행

```bash
npm install
npm run dev
# http://localhost:3000 접속
```

## 섹션 구성
- 히어로: 풀스크린 배경 이미지 + 태그라인, 앵커 스크롤 안내
- 뮤직: YouTube 카드 그리드, 클릭 시 모달 재생
- 프로젝트: 게임/애니메이션 가로 캐러셀
- 어바웃: 소개 문구/연락처 요약
- 컨택트: 이메일 + 인스타/유튜브/사운드클라우드/깃허브 링크 아이콘

## 이미지 교체
- 히어로 이미지: `src/app/page.tsx` → `hero` 섹션의 `Image src` 교체
- 프로젝트 이미지: `src/data/projects.ts` 의 `image` URL 교체
- 원격 도메인 추가 시: `next.config.ts` 의 `images.remotePatterns`에 호스트 추가

## 유튜브 포트폴리오 수정
- `src/data/music.ts`에서 항목을 추가/수정 (id=YouTube 영상 ID)

## 접근성/SEO
- 헤더 내비 ARIA 레이블/현재 섹션 표시
- OpenGraph 이미지: `src/app/opengraph-image.tsx`
- PWA 매니페스트: `src/app/manifest.webmanifest`

## 배포(Vercel 권장)
```bash
npm i -g vercel
vercel
vercel --prod
```

## 기술 스택
- Next.js(App Router) + TypeScript + Tailwind CSS
- Turbopack 개발 서버

## 라이선스
- © Yeonghun Yun. All rights reserved.
