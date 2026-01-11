# Open UI Guide 프로젝트 작업 규칙

## 프로젝트 개요
Tailwind CSS 기반의 UI 디자인 시스템 가이드 문서 프로젝트

## 기술 스택
- **CSS Framework**: Tailwind CSS v4 (빌드 방식)
- **CSS 빌드 파일**: `dist/output.css`
- **CSS 소스 파일**: `src/input.css`
- **Font**: Pretendard Variable (CDN)
- **Icons**: Google Material Symbols (CDN)
- **Dark Mode**: class 기반 (`html.dark`)

## 폴더 구조
```
/
├── index.html              # 메인 페이지
├── src/
│   └── input.css           # Tailwind CSS 소스 (디자인 토큰, 컴포넌트 클래스)
├── dist/
│   └── output.css          # 빌드된 CSS 파일
├── js/
│   └── menu.js             # 사이드메뉴 동적 생성
├── foundation/             # Foundation 가이드
├── atoms/                  # Atoms 컴포넌트 가이드
├── molecules/              # Molecules 컴포넌트 가이드
├── organisms/              # Organisms 컴포넌트 가이드
└── patterns/               # Patterns 가이드
```

## 페이지 작성 규칙

### 0. 기존 요소 재사용 원칙
- 가이드 페이지에서 이미 정의된 컴포넌트, 패턴, 스타일은 변경 없이 그대로 사용
- 새로운 스타일이나 패턴을 임의로 만들지 않고 기존 정의를 따름
- 동일한 UI 요소는 프로젝트 전체에서 일관된 형태로 유지

### 1. HTML 템플릿 구조
모든 가이드 페이지는 동일한 레이아웃 사용:
- 모바일 헤더 (lg 이하)
- 모바일 사이드바 오버레이
- Desktop 사이드바 (lg 이상)
- 메인 콘텐츠 영역 (`max-w-5xl mx-auto p-6 lg:p-8`)

### 2. 필수 Head 요소
```html
<!-- 빌드된 Tailwind CSS -->
<!-- 루트: ./dist/output.css, 하위폴더: ../dist/output.css -->
<link rel="stylesheet" href="../dist/output.css">

<!-- Pretendard 폰트 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css">

<!-- 다크모드 초기화 스크립트 -->
<script>
    if (localStorage.getItem('darkMode') === 'true' ||
        (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }
</script>
```

### 3. 메뉴 시스템
- `js/menu.js`를 통해 동적 생성
- 새 페이지 추가 시 `MENU_DATA` 배열에 항목 추가
- 페이지 하단에 `<script src="../js/menu.js"></script>` 포함

### 4. 색상 시스템
- **Primary**: violet (violet-50 ~ violet-900)
- **Base**: gray (gray-50 ~ gray-900)
- **Semantic**: emerald(성공), amber(경고), red(오류), blue(정보)

### 5. 다크모드 패턴
```html
<!-- 배경 -->
bg-white dark:bg-gray-800
bg-gray-50 dark:bg-gray-900

<!-- 텍스트 -->
text-gray-900 dark:text-white        /* Primary */
text-gray-600 dark:text-gray-400     /* Secondary */
text-gray-500 dark:text-gray-500     /* Tertiary */
text-violet-600 dark:text-violet-400 /* Accent */

<!-- 테두리 -->
border-gray-200 dark:border-gray-700
```

### 6. 컴포넌트 패턴
```html
<!-- 카드 -->
<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">

<!-- 섹션 -->
<section class="mb-12">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">제목</h2>
    <p class="text-gray-600 dark:text-gray-400 mb-6">설명</p>
    <!-- 내용 -->
</section>

<!-- 코드 블록 (신택스 하이라이트) -->
<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
    <div class="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <span class="text-sm font-medium text-gray-700 dark:text-gray-300">파일명</span>
        <div class="flex items-center gap-1.5">
            <span class="w-3 h-3 rounded-full bg-red-400"></span>
            <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span class="w-3 h-3 rounded-full bg-green-400"></span>
        </div>
    </div>
    <pre class="p-4 overflow-x-auto text-sm font-mono leading-relaxed"><code>...</code></pre>
</div>
```

### 7. 신택스 하이라이트 색상
- **셀렉터/클래스**: `text-violet-600 dark:text-violet-400`
- **속성**: `text-blue-600 dark:text-blue-400`
- **문자열**: `text-emerald-600 dark:text-emerald-400`
- **숫자/값**: `text-amber-600 dark:text-amber-400`
- **주석**: `text-gray-500 dark:text-gray-400`

### 8. Breadcrumb 패턴
```html
<div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
    <a href="../index.html" class="hover:text-violet-600 dark:hover:text-violet-400">Home</a>
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
    </svg>
    <span>Foundation</span>
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
    </svg>
    <span class="text-gray-900 dark:text-white">페이지명</span>
</div>
```

### 9. Usage Guidelines 섹션
```html
<section>
    <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Usage Guidelines</h2>
    <div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Do -->
            <div>
                <h3 class="font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <svg class="w-5 h-5 text-emerald-500">...</svg>
                    Do
                </h3>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• 항목</li>
                </ul>
            </div>
            <!-- Don't -->
            <div>
                <h3 class="font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <svg class="w-5 h-5 text-red-500">...</svg>
                    Don't
                </h3>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• 항목</li>
                </ul>
            </div>
        </div>
    </div>
</section>
```

## Git 커밋 규칙
- **feat**: 새로운 기능/페이지 추가
- **fix**: 버그 수정
- **refactor**: 리팩토링
- **docs**: 문서 수정
- 커밋 메시지는 한글로 작성
- 본문에 주요 변경사항 bullet point로 기술
- **자동 커밋 금지**: 사용자가 명시적으로 요청할 때만 커밋 수행
- **Claude 정보 제외**: 커밋 메시지에 "Generated with Claude Code", "Co-Authored-By" 등 AI 관련 정보 포함하지 않음

## 인터렉티브 기능 패턴
- 슬라이더/토글: `oninput` 또는 `onchange` 이벤트
- 복사 기능: `navigator.clipboard.writeText()` + 토스트 메시지
- 검색/필터: 실시간 필터링 with `oninput`

## Tailwind CSS 빌드 프로세스

### 빌드 명령어
```bash
npx @tailwindcss/cli -i ./src/input.css -o ./dist/output.css
```

### 빌드가 필요한 경우
- `src/input.css` 파일 수정 시
- HTML 파일에서 새로운 Tailwind 클래스 사용 시
- 디자인 토큰 또는 컴포넌트 클래스 추가/수정 시

### input.css 구조
```css
@import "tailwindcss";

/* 소스 파일 경로 설정 */
@source "../**/*.html";

/* 다크모드 설정 */
@variant dark (&:where(.dark, .dark *));

/* 디자인 토큰 - @theme 블록 */
@theme {
  --color-base-*: ...;      /* Base 색상 (gray 팔레트) */
  --color-primary-*: ...;   /* Primary 색상 (violet 팔레트) */
}

/* 시맨틱 변수 - :root 블록 */
:root {
  --semantic-success: ...;   /* Emerald */
  --semantic-warning: ...;   /* Amber */
  --semantic-error: ...;     /* Red */
  --semantic-info: ...;      /* Blue */
}

/* 컴포넌트 클래스 - @layer components */
@layer components {
  .btn { ... }
  .input { ... }
  /* ... */
}
```

## 유틸리티 클래스 변환 작업 규칙

### 1. 인라인 클래스 → 유틸리티 클래스 변환 원칙
- HTML에서 반복되는 인라인 Tailwind 클래스를 `src/input.css`의 유틸리티 클래스로 추출
- 컴포넌트 단위로 `.btn`, `.input` 등 시맨틱한 클래스명 사용
- `@layer components` 블록 내에 정의

### 2. 디자인 토큰 색상 클래스 매핑
기존 Tailwind 색상 → 디자인 토큰 색상으로 변환:

| 기존 클래스 | 변환 클래스 | 용도 |
|------------|------------|------|
| `text-gray-*` | `text-base-*` | Base 색상 텍스트 |
| `bg-gray-*` | `bg-base-*` | Base 색상 배경 |
| `border-gray-*` | `border-base-*` | Base 색상 테두리 |
| `text-violet-*` | `text-primary-*` | Primary 색상 텍스트 |
| `bg-violet-*` | `bg-primary-*` | Primary 색상 배경 |
| `border-violet-*` | `border-primary-*` | Primary 색상 테두리 |

### 3. 컴포넌트 클래스 네이밍 규칙
```
.{컴포넌트}-{변형}-{상태}

예시:
.btn                    # 버튼 베이스
.btn-md                 # 버튼 사이즈 (xs, sm, md, lg, xl)
.btn-primary            # 버튼 색상 변형
.btn-primary-outline    # 버튼 색상 + 스타일 변형
.btn-disabled           # 버튼 상태
.input                  # 인풋 베이스
.input-error            # 인풋 상태
```

### 4. 클래스 조합 패턴
HTML에서 유틸리티 클래스 조합하여 사용:
```html
<!-- 버튼: 베이스 + 사이즈 + 색상 -->
<button class="btn btn-md btn-primary">버튼</button>

<!-- 인풋: 베이스 + 사이즈 + 상태 + 너비 -->
<input class="input input-md input-error input-full">
```

### 5. 변환 작업 순서
1. 가이드 HTML 파일에서 인라인 클래스 패턴 분석
2. `src/input.css`에 유틸리티 클래스 정의 추가
3. HTML 파일의 인라인 클래스를 유틸리티 클래스로 교체
4. CSS 빌드 실행: `npx @tailwindcss/cli -i ./src/input.css -o ./dist/output.css`
5. 브라우저에서 스타일 적용 확인

### 6. 주의사항
- **CDN 미사용**: 커스텀 `@theme` 토큰은 Tailwind CDN에서 인식 불가
- **빌드 필수**: 클래스 변경 후 반드시 CSS 빌드 실행
- **다크모드 지원**: 모든 클래스에 `dark:` 변형 포함
- **일관성 유지**: 동일 컴포넌트는 동일 클래스 조합 사용
