# WAI-ARIA Best Practices

## What is WAI-ARIA

WAI-ARIA는 Web Accessibility Initiative - Accessible Rich Internet Application 의 약어로 
W3C의 WAI에서 제정한 RIA의 접근성 보장을 위한 기술 규격입니다.

WAI-ARIA는 2006년 First Working Draft 문서가 등록되어 2014년 3월에 1.0버전이 REC버전으로 등록된 후, 
현재 1.1 버전이 PR버전으로 올라가 있고, 최신 권고안을 볼 수 있는 [대표 주소](https://www.w3.org/TR/wai-aria/)로 
들어가도 이 버전으로 접근이 됩니다. 즉, 현재는 1.1이 최종 권고안이라고 해도 될 것 같습니다.

## Why use?

> supplement for native language semantics, but not a replacement

W3C의 WAI-ARIA 명세에 네이티브 언어의 의미론을 보완하기 위한 것이라 기술하고 있습니다. 
그리고 추가로 교체가 아니라고 기술되어 있는데요,  이것은 WAI-ARIA가 native language의 의미를 
교체하는데 사용하는 것이 아니라는 이 점을 이야기 하구요, 이를 잘 기억하고 있어야 WAI-AIRA를 오용하는 
일을 줄일 수 있습니다. 가능은 하나 의도와는 맞지 않다라는 것입니다.

## Role, Property, State

WAI-ARIA는 이 세 가지를 통해 정보를 전달하게 됩니다.

### Role

> Attaching a role gives assistive technologies information about how to handle each element

WAI-ARIA에서 Role을 부여하는 것은 각 요소가 어떤 역할이다라는 것을 부여하여 스크린리더 같은 보조 
기술에 각 요소를 어떻게 처리해야 한다는 정보를 제공합니다. 

예를 들어, `role="button"`을 주었다면 이 요소는 버튼으로서 처리를 해야 한다는 정보를 제공하는 것입니다.

role을 적용하는 것은 tag에 attribute를 적용하는 방법과 동일합니다.

```html
<tag role="keyword">
```

예를 들어, &lt;div> 태그에 navigation role을 적용하기 위해서 

```html
<div role="navigation">
```

과 같이 사용합니다.

role 에 사용될 수 있는 keyword 목록은 [WAI-ARIA 명세](https://www.w3.org/TR/wai-aria/#x5-4-definition-of-roles)에서 
보실 수 있습니다.

### Property, State

Property와 State 즉, 속성과 상태는 "객체에 대한 특정한 정보를 전달하고, 역할의 특징에 대한 정의의 
일부를 형성합니다." 라고 W3C에 나와 있습니다. 

쉽게 말해, 속성과 상태는 해당 객체에 대한 속성이나 현재 상태를 부여합니다. 예를 들어 객체의 레이블을 
정의하거나, 하위 메뉴를 가지고 있는지의 속성을 설정하거나, 현재 펼쳐진 상태인지 닫혀진 상태인지 등을 
설정하는데 사용할 수 있습니다. 

property, state는 `aria-` prefix를 사용하여 attribute로 적용합니다.

```html
<tag aria-*="value">
```

예를 들어, button에 펼침 상태를 부여하고, <var>sect1</var>이라는 id를 가진 객체에 대한 컨트롤이라는 
속성을 부여하기 위해

```html
<button aria-expanded="false" aria-controls="sect1">
```

과 같이 사용할 수 있습니다.

## How to improve accessibility with WAI-ARIA

### step 1. use native HTML

정말 불가능한 경우가 아닌 이상 native HTML을 사용하여 semantic markup을 하는 것이 시작이라 할 수 
있습니다.

앞서 WAI-ARIA를 왜 사용해야 하는가를 이야기 할 때, 네이티브 언어의 의미론을 보완하기 위한 것이라고 
했는데, WAI-ARIA의 목적이 보완이기 때문에 native HTML을 사용해야하는 것이 가장 기본이됩니다.

#### then, when use WAI-ARIA?

- 기능이 HTML로 가능하지만 아직 구현되지 않았거나, 구현은 되어 있지만 브라우저에서 접근성 지원이
되지 않은 경우 (ref. [HTML5 Accessibility](http://www.html5accessibility.com/))
- 커스텀 컴포넌트와 같이 시각적 디자인의 이유로 특정 네이티브 요소를 사용할 수 없는 경우
- 기능이 현재 HTML로 사용할 수 없는 경우

### step 2. Add ARIA

native HTML를 사용한 후, 이것만으로 제공되기 어려운 정보들을 ARIA를 추가하여 더 향상된 접근성을 
제공합니다.

#### inline or via Script?

ARIA role, arai-* 속성의 적용 시점(인라인 혹은 스크립트를 통해)에 대해, W3C에서는 크게 다음의 두 
가지 기준을 제공하고 있습니다.

- ARIA role이나 aria-* 속성이 인터랙션을 제공하는데 스크립트에 의존하지 않는다면 inline으로
- 콘텐츠와 인터랙션이 스크립트 활성화 브라우징 콘텍트스에서만 지원되는 경우에도, inline으로 하는 것이 
안전하며
- ARIA role이나 aria-* 속성이 스크립트를 통해 추가,변경,제거 되어야 하는 경우에는 스크립트를 통해서

### step3. developing keyboard interface

그리고 중요한 것이 바로 키보드 인터페이스를 개발해야 하는 것입니다.

- 모든 대화형 aria 컨트롤들은 키보드로 사용가능해야 하고
- 클릭 할 수 있거나 탭, 드래그, 드롭, 슬라이드, 스크롤 할 수 있다면, 키보드를 사용해서 동등한 수준의 
행위를 할 수 있어야 하며
- 대화형 위젯은 표준 키 스트로크나 키 스트로크 조합에 응답하도록 스크립팅 되어야 합니다.

## Best Practices

### Landmark

구현할 수있는 가장 쉬운 ARIA 기능 중 하나이자 스크린리더 사용자에게 중요한 즉각적인 이점을 제공하는 
기능 중 하나가 랜드 마크 역할. 

한 페이지에서 많은 정보를 보여주어야 하는 포털 사이트 같은 경우에 단순히 반복 영역 건너뛰기 외에, 
여러 개의 바로가기 링크를 Skip Navigation에 담아서 보여주는 케이스가 종종 있습니다.

<img src="https://mulder21c.github.io/seminar/20171206/images/skip-nav.png" alt="여러 개의 바로가기 링크 제공 사례 캡쳐 화면" width="700">

기존 방식의 마크업

```html
<div class="header">
  <h1>ARIA Landmarks Example</h1>
</div>
<div class="navigation">
  <ul><li><a>...</a></li>...</ul>
</div>
<div class="main">
  <h2>Banner Landmark</h2>
  <div class="tab-container">
	  ...
  </div>
</div>
<div class="sidebar">
  <h2>Landmarks</h2>
</div>
<div class="sidebar">
  <h2>Related W3C Documents</h2>
</div>
<div class="footer">
  Copyright
</div>
```

landmark role을 이용하면 조금 더 세련된 방법으로 각 영역으로 바로가기를 제공할 수 있습니다.

현재 Sense Reader, NVDA, JAWA, Window Eyes, Voiceover 등의 주요 스크린리더기들에서 랜드마크 탐색 
단축키가 제공되고 있어, 언제 어느 곳에 위치해있었든지 랜드마크를 기준으로 컨텐츠를 손쉽게 탐색할 수 
있습니다.

<img src="https://mulder21c.github.io/seminar/20171206/images/landmark.png" alt="랜드마크 제공 사례  캡쳐 화면" width="500">

ARIA를 적용하기에 앞서 일단 native가 가능하다면 native를 활용할 수 있습니다. 

HTML5 의 시맨틱 요소들은 이미 암묵적인 role을 가지고 있기 때문에 native로 마크업 하는 것만으로도 
랜드마크가 자동으로 적용됩니다.

**Native Language를 사용한 방법**

```html
<header>                                                  <!-- banner landmark -->
  <h1>ARIA Landmarks Example</h1>
</header>
<nav>                                                     <!-- navigation landmark -->
  <ul>...</ul>
</nav>
<main>                                                    <!-- main landmark -->
  <h2>Banner Landmark</h2>
  <section>                                               <!-- region landmark -->
    ...
  </section>
</main>
<aside>                                                   <!-- complementary landmark -->
  <h2>Landmarks</h2>
</aside>
<aside>                                                   <!-- complementary landmark -->
  <h2>Related W3C Documents</h2>
</aside>
<footer>                                                  <!-- contentinfo landmark -->
  Copyright
</footer>
```

만일, IE 8 등에 대응해야 하는 경우에는, HTML5 semantic markup을 사용할 수가 없기 때문에, 그런 
경우에는 아래와 같이 landmark role을 적용해 볼 수 있습니다.

**Use ARIA Techniques**

```html
<div class="header" role="banner">
  <h1>ARIA Landmarks Example</h1>
</div>
<div class="navigation" role="navigation">
  <ul><li><a>...</a></li>...</ul>
</div>
<div class="main" role="main">
  <h2>Banner Landmark</h2>
  <div class="tab-container" role="region" aria-label="Coding Tequniques">
	  ...
  </div>
</div>
<div class="sidebar" role="complementary" aria-labelledby="id3">
  <h2 id="id3">Landmarks</h2>
</div>
<div class="sidebar" role="complementary" aria-labelledby="id4">
  <h2 id="id4">Related W3c Documents</h2>
</div>
<div class="footer" role="contentinfo">
  Copyright
</div>
```

### Tab Contents

![3개의 탭 메뉴와 탭 패널이 있는 탭 UI 예제 캡쳐 화면](https://mulder21c.github.io/seminar/20171206/images/tab-ui.png)

종종 사용되는 동적 콘텐츠의 예로 탭 콘텐츠를 들 수 있습니다.

기존 방식의 마크업 예

```html
<div class="tab-menu">
  <a href="#tab-panel1">HTML</a>
  <a href="#tab-panel2">CSS</a>
  <a href="#tab-panel3">JavaScript</a>
</div>
<div class="tab-panels">
  <div id="tab-panel1">
    <h3>HTML</h3>
    ...
  </div>
  <div id="tab-panel2">
    <h3>CSS</h3>
    ...
  </div>
  <div id="tab-panel3">
    <h3>JavaScript</h3>
    ...
  </div>
</div>
```

이러한 경우, "탭 메뉴 - 탭 패널"이라는 의미를 전달하는 navtive HTML은 없기 때문에 native 언어만으로는
충분한 의미를 전달할 수 없고 WAI-ARIA로 의미를 보완해 주는 것이 절실하게 필요해집니다.

**Use ARIA Techniques - Add role**

```html
<div class="tab-menu" role="tablist">
  <a href="#tab-panel1" role="tab">HTML</a>
  <a href="#tab-panel2" role="tab">CSS</a>
  <a href="#tab-panel3" role="tab">JavaScript</a>
</div>
<div class="tab-panels">
  <div id="tab-panel1" role="tabpanel">
    ... 
  </div>
  <div id="tab-panel2" role="tabpanel">
    ... 
  </div>
  <div id="tab-panel3" role="tabpanel">
    ... 
  </div>
</div>
```

먼저 각 요소들에 적용되어야 하는 역할들을 role 속성을 통해 부여 합니다. <br>
탭 메뉴를 감싸는 요소에는 `role="tablist"`를, 각 탭 메뉴에는 `role="tab"`을, 탭 패널에 해당하는 
요소들에는 `role="tabpaner"`을 적용합니다.

**Use ARIA Techniques - add properties, states**

```html
<div class="tab-menu" role="tablist">
  <a id="tab1" href="#tab-panel1" role="tab" 
      aria-controls="tab-panel1" aria-selected="true">HTML</a>
  <a id="tab2" href="#tab-panel2" role="tab" 
      aria-controls="tab-panel2" aria-selected="false">CSS</a>
  <a id="tab3" href="#tab-panel3" role="tab" 
      aria-controls="tab-panel3" aria-selected="false">JavaScript</a>
</div>
<div class="tab-panels">
  <div id="tab-panel1" role="tabpanel" 
         aria-labelledby="tab1">
    ... 
  </div>
  <div id="tab-panel2" role="tabpanel" 
         aria-labelledby="tab2" aria-hidden="true">
    ... 
  </div>
  <div id="tab-panel3" role="tabpanel" 
         aria-labelledby="tab3" aria-hidden="true">
    ... 
  </div>
</div>
```
필요한 속성들과 상태 &mdash; 각 탭 메뉴는 어느 패널의 컨트롤인지, 현재 선택되어 있는지의 상태, 
각 탭 패널의 제목이 무엇인지, 현재 노출 되어 있는지 숨겨져 있는지의 상태 등을 추가로 적용합니다.

**Use ARIA Techniques - developing keyboard interface**

이제, 키보드 인터랙션을 구현합니다. 탭 UI에 필요한 키보드 인터랙션은 다음과 같습니다. 

Keyboard Supoort

|     Key     |	Function |
|:-----------:|:--------|
| <kbd>Tab</kbd> | <ul><li>when focus moves into the tab list, place focus on active <code>tab</code> element</li><li>When the tab list contains the focus, moves focus to the next element in the tab sequence, which is the tabpanel element</li></ul> |
| <kbd>Right Arrow</kbd> | <ul><li>Moves focus to the next tab.</li><li>If focus is on the last tab, moves focus to the first tab.</li><li>Activates the newly focused tab</li></ul> |
| <kbd>Left Arrow</kbd> | <ul><li>Moves focus to the previous tab.</li><li>If focus is on the first tab, moves focus to the last tab.</li><li>Activates the newly focused tab</li></ul> |
| <kbd>Home</kbd> | Moves focus to the first tab and activates it |
| <kbd>End</kbd> | Moves focus to the last tab and activates it |

이렇게 구현이 되면, 사용자는 이제 이 콘텐츠가 탭 UI형태의 콘텐츠임을 인지할 수 있게 되고, 
따라서 이 콘텐츠를 어떻게 사용해야 하는지를 쉽게 알 수 있게됩니다.

## Should I implement it myself?

이를 직접 구현해야 하느냐라는 질문은 종종 받게 됩니다. 

### Yes, if you can.

직접 구현할 수 있으면 좋습니다. 

[WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices-1.1) 문서에는 아래 화면과 
같이 각 위젯이나 디자인 패턴에 따라 설명과 예제, 키보드 인터랙션, 적용되어야 하는 WAI-ARIA role, 
property, state들이 기술 되어 있기 때문에, 직접 만들 수 있는 분은 이를 참고하여 개발해 볼 수 있습니다.

![W3C Authoring Practices 문서 캡쳐 화면](https://mulder21c.github.io/seminar/20171206/images/w3c-practices.png)

하지만 이 문서가 영어라서 보기 어렵다 하는 경우에는,

작년에 정보화진흥원에서 만든 예제로 보는 WAI-ARIA 사례집도 있습니다. <br>
마찬가지로 각 사례별로 어떻게 적용해야 하는지와 자바스크립트 개발을 어떻게 해야 하는지가 절차적으로 
기술되어 있으므로 참고하면 좋습니다.

<img src="https://mulder21c.github.io/seminar/20171206/images/aria-cover.jpg" alt="예제로 보는 WAI-ARIA 사례집" width="400">

### otherwise

하지만, 직접 구현할 수 없는 경우에는 다른 이미 만들어져 있는 것들을 활용하실 수가 있습니다.

![jQueryUI 아코디언 위젯에 aria가 적용된 것을 코드 상에서 확인 할 수 있다.](https://mulder21c.github.io/seminar/20171206/images/jquery-ui.png)

jQueryUI는 WAI-ARIA 사양에 지정된 지침을 따라 개발되어지고 있음을 소개 페이지에서 볼 수 있고, 실제로 
코드 상에도 role 및 aria-* 속성들이 적용되어 있는 것을 볼 수 있습니다.

![github에서 accordion wai-aria로 검색한 결과 화면](https://mulder21c.github.io/seminar/20171206/images/github.png)

github 에서도 wai-aria와 함께 찾고자 하는 기능을 검색해보면 필요한 라이브러리나 코드 조각들을 쉽게 
얻을 수 있습니다.

![정보화진흥원 WAI-ARIA 사례집 코드 수록 github 페이지 화면](https://mulder21c.github.io/seminar/20171206/images/niawa-github.png)

앞서 언급된 소개했던 예제로 보는 WAI-ARIA 사례집은 인쇄물만 있는 것이 아니라, 코드가 github에 수록이 
되어 있고, 일부는 라이브러리 형태로 제작이 되어 있기 때문에 손쉽게 가져다 사용 할 수도 있습니다.

## References

- [WAI-ARIA Specification](https://www.w3.org/TR/wai-aria)
- [Using ARIA](https://www.w3.org/TR/using-aria)
- [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices)
- [HTML5 Accessibility](http://www.html5accessibility.com)