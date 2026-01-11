/**
 * 사이드메뉴 관리 스크립트
 * 모든 페이지에서 동일한 메뉴를 동적으로 생성합니다.
 */

// 메뉴 데이터
const MENU_DATA = [
    {
        title: 'Foundation',
        items: [
            { id: 'color', name: 'Color', href: 'foundation/color.html', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },
            { id: 'typography', name: 'Typography', href: 'foundation/typography.html', icon: 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129' },
            { id: 'icons', name: 'Icons', href: 'foundation/icons.html', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' }
        ]
    },
    {
        title: 'Atoms',
        items: [
            { id: 'button', name: 'Button', href: 'atoms/button.html', icon: 'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122' },
            { id: 'input', name: 'Input', href: 'atoms/input.html', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
            { id: 'badge', name: 'Badge + Tag', href: 'atoms/badge.html', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
            { id: 'avatar', name: 'Avatar', href: 'atoms/avatar.html', icon: 'M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
            { id: 'checkbox', name: 'Checkbox + Radio', href: 'atoms/checkbox.html', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
            { id: 'tooltip', name: 'Tooltip', href: 'atoms/tooltip.html', icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
        ]
    },
    {
        title: 'Molecules',
        items: [
            { id: 'card', name: 'Card', href: 'molecules/card.html', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
            { id: 'search-input', name: 'Search Input', href: 'molecules/search-input.html', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
            { id: 'button-group', name: 'Button Group', href: 'molecules/button-group.html', icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
            { id: 'breadcrumb', name: 'Breadcrumb', href: 'molecules/breadcrumb.html', icon: 'M9 5l7 7-7 7' },
            { id: 'tabs', name: 'Tabs', href: 'molecules/tabs.html', icon: 'M4 6h16M4 12h8m-8 6h16' },
            { id: 'pagination', name: 'Pagination', href: 'molecules/pagination.html', icon: 'M11 19l-7-7 7-7m8 14l-7-7 7-7' },
            { id: 'data-table', name: 'Data Table', href: 'molecules/data-table.html', icon: 'M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' }
        ]
    },
    {
        title: 'Organisms',
        items: [
            { id: 'sidebar', name: 'Sidebar', href: 'organisms/sidebar.html', icon: 'M4 6h16M4 12h16M4 18h7' },
            { id: 'header', name: 'Header', href: 'organisms/header.html', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z' },
            { id: 'footer', name: 'Footer', href: 'organisms/footer.html', icon: 'M4 19a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2z' },
            { id: 'modal', name: 'Modal', href: 'organisms/modal.html', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z M8 10h8 M8 14h4' },
            { id: 'navigation', name: 'Navigation', href: 'organisms/navigation.html', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
            { id: 'comment-section', name: 'Comment Section', href: 'organisms/comment-section.html', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' }
        ]
    },
    {
        title: 'Patterns',
        items: [
            { id: 'list-layout', name: 'List Layout', href: 'patterns/list-layout.html', icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
            { id: 'detail-layout', name: 'Detail Layout', href: 'patterns/detail-layout.html', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
            { id: 'form-layout', name: 'Form Layout', href: 'patterns/form-layout.html', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
            { id: 'dashboard', name: 'Dashboard', href: 'patterns/dashboard.html', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' },
            { id: 'auth-flow', name: 'Auth Flow', href: 'patterns/auth-flow.html', icon: 'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z' }
        ]
    }
];

// 스타일 클래스 상수
const STYLES = {
    sectionTitle: 'text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 px-3',
    menuList: 'space-y-0.5',
    menuItem: 'flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-all duration-200 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white',
    menuItemActive: 'flex items-center gap-3 px-3 py-2 text-sm rounded-lg bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 font-medium',
    icon: 'w-5 h-5 flex-shrink-0 text-gray-400',
    iconActive: 'w-5 h-5 flex-shrink-0 text-violet-500'
};

/**
 * 현재 페이지의 깊이를 계산하여 상대 경로 프리픽스 반환
 */
function getBasePath() {
    const path = window.location.pathname;

    // 알려진 하위 폴더 목록
    const subfolders = ['foundation', 'atoms', 'molecules', 'organisms', 'patterns'];

    // 현재 경로에 하위 폴더가 포함되어 있는지 확인
    for (const folder of subfolders) {
        if (path.includes('/' + folder + '/')) {
            return '../';
        }
    }

    // 루트에 있는 경우
    return '';
}

/**
 * 현재 페이지 ID 추출
 */
function getCurrentPageId() {
    const path = window.location.pathname;
    const match = path.match(/\/([^\/]+)\.html$/);
    return match ? match[1] : null;
}

/**
 * SVG 아이콘 요소 생성
 */
function createIcon(pathData, isActive) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', isActive ? STYLES.iconActive : STYLES.icon);
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('viewBox', '0 0 24 24');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('d', pathData);

    svg.appendChild(path);
    return svg;
}

/**
 * 메뉴 항목 생성
 */
function createMenuItem(item, basePath, currentPageId, isMobile) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const isActive = item.id === currentPageId;

    a.href = basePath + item.href;
    a.className = isActive ? STYLES.menuItemActive : STYLES.menuItem;

    if (isMobile) {
        a.setAttribute('onclick', 'closeMobileSidebar()');
    }

    a.appendChild(createIcon(item.icon, isActive));

    const span = document.createElement('span');
    span.textContent = item.name;
    a.appendChild(span);

    li.appendChild(a);
    return li;
}

/**
 * 섹션 생성
 */
function createSection(section, basePath, currentPageId, isMobile) {
    const div = document.createElement('div');

    const h3 = document.createElement('h3');
    h3.className = STYLES.sectionTitle;
    h3.textContent = section.title;
    div.appendChild(h3);

    const ul = document.createElement('ul');
    ul.className = STYLES.menuList;

    section.items.forEach(item => {
        ul.appendChild(createMenuItem(item, basePath, currentPageId, isMobile));
    });

    div.appendChild(ul);
    return div;
}

/**
 * 전체 네비게이션 렌더링
 */
function renderNavigation(container, isMobile) {
    const basePath = getBasePath();
    const currentPageId = getCurrentPageId();

    container.innerHTML = '';

    MENU_DATA.forEach(section => {
        container.appendChild(createSection(section, basePath, currentPageId, isMobile));
    });
}

/**
 * 메뉴 초기화
 */
function initializeMenu() {
    const desktopNav = document.getElementById('desktop-nav');
    if (desktopNav) {
        renderNavigation(desktopNav, false);
    }

    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav) {
        renderNavigation(mobileNav, true);
    }
}

// DOM 로드 완료 시 초기화
document.addEventListener('DOMContentLoaded', initializeMenu);
