// fetch fake data
// prettier-ignore
const fetchTabs = () => 
new Promise(resolve => {
  setTimeout(
    () => resolve([
      {
        title: '메일',
        content: 'email',
      },
      {
        title: '카페',
        content: 'cafe',
      },
      {
        title: '블로그',
        content: 'blog',
      },
    ]), 1000
  )
})

// Do something!
// 1. 탭 정보를 그린다.
// 2. curTabIndex를 state로 저장한다.
// 3. 클릭 이벤트가 발생하면 state 변경 => render

const $tabs = document.querySelector('.tabs');

let curTabIdx = 0;

const render = tabs => {
  $tabs.innerHTML = `
  <nav>
    ${tabs
      .map(
        ({ title }, i) => `
        <div class="tab" data-index="${i}">${title}</div>
        `
      )
      .join('')}
    <span class="glider"></span>
  </nav>
  ${tabs
    .map(
      ({ content }, i) => `
    <div class="tab-content${i === 0 ? ' active' : ''}">
      ${content}
    </div>
    `
    )
    .join('')}
  `;
};

const changeTab = () => {
  const $glider = $tabs.querySelector('.glider');
  const $tabContents = $tabs.querySelectorAll('.tab-content');

  $glider.style.transform = `translate3d(${100 * curTabIdx}%, 0, 0)`;
  [...$tabContents].forEach(($tabContent, i) => {
    $tabContent.classList.toggle('active', i === curTabIdx);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const tabs = fetchTabs();
  tabs.then(tabs => {
    $tabs.style.setProperty('--tabs-length', tabs.length);
    render(tabs);
  });
});

$tabs.addEventListener('click', e => {
  if (!e.target.classList.contains('tab')) return;
  curTabIdx = +e.target.dataset.index;
  changeTab();
});

/**
 *       <!--
      fetchTabsData 함수를 사용해 탭 정보를 담고 있는 배열을 취득해 Tabs를 동적 생성한다.
      -->
      <!--
      <nav>
        <div class="tab" data-index="0">HTML</div>
        <div class="tab" data-index="1">CSS</div>
        <div class="tab" data-index="2">JavaScript</div>
        <span class="glider"></span>
      </nav>
      <div class="tab-content active">
        HTML(HyperText Markup Language) is the most basic building block of the Web. It describes and defines
        the content of a webpage along with the basic layout of the webpage. Other technologies besides HTML
        are generally used to describe a web page's appearance/presentation(CSS) or functionality/
        behavior(JavaScript).
      </div>
      <div class="tab-content">
        Cascading Style Sheets(CSS) is a stylesheet language used to describe the presentation of a document
        written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how
        elements should be rendered on screen, on paper, in speech, or on other media.
      </div>
      <div class="tab-content">
        JavaScript(JS) is a lightweight interpreted or JIT-compiled programming language with first-class
        functions. While it is most well-known as the scripting language for Web pages, many non-browser
        environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a
        prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and
        declarative (e.g. functional programming) styles.
      </div>
    -->
 */
