# 웹 미디어 플레이어 접근성

> - 행사명 : IAT(정보 접근성 기술) 컨퍼런스 세미나
> - 발표자 : 콘텐츠연합플랫폼(주) 클라이언트개발부 지성봉
> - 문의 : publisher@publisher.name 혹은 [guthub issues](https://github.com/mulder21c/seminar/issues)

## 정보접근성 기술개발 연구팀 (함께한 이들)

2017.02 ~ 2017.10 장애인의 정보접근성 걸림돌을 제거하기 위한 연구반 진행

한정기, 김데레사, 야무, 김혜일, 조은, 지성봉

## 웹 접근성

장애에 구애없이 모든 사람이 접근할 수 있는 것

## 웹 미디어 플레이어 접근성

미디어 플레이어 기능

### 조작 가능

- 재생 / 정지
- 탐색
- 되감기/빨리감기
- 볼륨 조절
- 회차 목록 보기
- 설정 패널 등

### 시청 가능

- 화면을 볼 수 있어야 (화면 해설) 
- 소리를 들을 수 있어야 (자막)

## 웹 미디어 플레이어 접근성 실태

| 문제 사례 | A 사이트 | B 사이트 | C 사이트 | D 사이트 | 
| :-------------------: | :----------: | :---------: | :-------: | :------: | 
| 초점 이동 | 해당 | 해당 | 해당 | 해당 | 
| 키보드 조작 | — | 해당 | 해당 | — | 
| 자막 미제공 | 해당 | 해당 | 해당 | 해당 | 
| 대체 텍스트 | 해당 | 해당 | — | 해당 | 
| 자동 재생 | 해당 | — | 해당 | 해당 | 

## 접근성 문제점 & 해결 방법

### 초점 이동 불가

> 6.1. 입력장치 접근성 <br>
6.1.2. (초점 이동) 키보드에 의한 초점은 논리적으로 이동해야하며 시각적으로 
구별할 수 있어야 한다.

#### 문제 사례

##### 동영상

[movies/focus-error-case.mp4](https://mulder21c.github.io/seminar/20171124/movies/focus-error-case.mp4)

##### 동영상 설명

플레이어 재생 화면에서 컨트롤러가 사라진 이후 <kbd>tab</kbd>키를 눌러 초점을 
이동했을 때, 화면 상에는 초점이 표시되지 않고 있고 스크린리더에서는 각 
컨트롤들을 읽고 있다.

- 동영상 컨트롤러들이 마우스가 재생 영역에 올라갈 경우에 노출, 마우스 움직임이 
없거나 재생 영역 밖으로 이동할 경우 숨겨짐
- 마우스에는 대응이 되어 있는 반면, 키보드 대응이 되어 있지 않은 상황
- <kbd>tab</kbd>키 운용에 따라 각 컨트롤들이 초점을 얻고있지만 화면 상에 
노출되지 않거나
- <kbd>tab</kbd>키 운용에 따라 컨트롤러에 접근이 불가능

#### 해결 방법

- 초점 이동을 시각적으로 확인 할 수 있게 제공
- 논리적 순서에 따라 초점이 이동되도록 제공

#### 접근성 제공 사례

##### 동영상

[movies/focus-accessible-case.mp4](https://mulder21c.github.io/seminar/20171124/movies/focus-accessible-case.mp4)

##### 동영상 설명

플레이어 재생 화면에서 컨트롤러가 사라진 이후 <kbd>tab</kbd>키를 눌러 초점을 
이동했을 때, 다시 컨트롤러가 나타나고 각 컨트롤들이 모두 초점을 얻으며 조작 
가능하다.

사용자가 재생 버튼을 누른 이후, 더 이상의 키 입력이 없을 때에 컨트롤러가 
시각적으로 사라지며, 다시 <kbd>tab</kbd>키를 누를 경우 컨트롤러가 다시 나타난다.

### 키보드 조작 불가

> 6.1. 입력장치 접근성 <br>
6.1.1. (키보드 사용 보장) 모든 기능은 키보드만으로도 사용할 수 있어야 한다.

##### 동영상

[movies/keyboard-control-error.mp4](https://mulder21c.github.io/seminar/20171124/movies/keyboard-control-error.mp4)

##### 동영상 설명

설정 패널을 열었지만, 각 설정 항목들에 초점이 들어가지 않기 때문에 설정을 
진행할 수 없다. 회차 목록을 열었을 때 또한 마찬가지로 각 회차에 접근이 되지 
않는다.

- 마크업을 확인 해 보면, 각 설정 항목들이 모두 <div> 로 마크업 되어 있는 것을 
볼 수 있다.
- 초점을 받아야 할 컴포넌트가 초점을 받을 수 없도록 마크업 되어 있는 상황

#### 해결 방법

- 키보드만으로도 조작할 수 있도록 제작
- 초점을 얻을 수 있는 요소 사용
- 혹은 `tabindex` 속성을 이용하여 초점을 얻을 수 있도록 제작

#### 접근성 제공 사례

##### 동영상

[movies/keyboard-control-right.mp4](https://mulder21c.github.io/seminar/20171124/movies/keyboard-control-right.mp4)

##### 동영상 설명

회차 정보 패널을 열었을 때, 각 회차들에 초점 이동이 가능한 것이 확인된다. 
각 회차 목록의 마크업을 확인 해 보면, `div`로 마크업 되어 있는 것이 확인 되지만, 
각각 `tab-index="0"` 속성을 사용함으로서 초점을 받을 수 있도록 되어 있는 것을 볼 
수 있다.

```html
<div class="episode-list">
	...
	<div class="body">
		<div class="nfp-episode-expander" tabindex="0">
			...
		</div>
		<div class="nfp-episode-expander" tabindex="0">
			...
		</div>
		<div class="nfp-episode-expander" tabindex="0">
			...
		</div>
		...
	</div>
</div>
```

### 자막 제공

> 5.2. 멀티미디어 대체 수단 <br>
5.2.1. (자막 제공) 멀티미디어 콘텐츠에는 자막, 대본 또는 수화를 제공해야 한다

#### 문제 사례

##### 동영상

[movies/non-caption.mp4](https://mulder21c.github.io/seminar/20171124/movies/non-caption.mp4)

##### 동영상 설명

멀티미디어 컨텐츠에는 자막, 원고 또는 수화를 제공해야하지만, 어떠한 자막이나 
원고도 제공되고 있지 않다.

#### 해결 방법

- 열린 자막 혹은 닫힌 자막 제공
- 화면 해석, 대본 제공
- 수화 제공
- 사용자 제작 영상의 경우 자막/원고 업로드 기능 제공

#### 접근성 제공 사례

##### 동영상

[movies/support-caption.mp4](https://mulder21c.github.io/seminar/20171124/movies/support-caption.mp4)

##### 동영상 설명

N 사이트의 경우 닫힌 자막을 제공하고 있고, 사용자의 업로드가 주 콘텐츠인 Y 
사이트의 경우 자막을 직접 업로드하거나 입력할 수 있게 제공하고 있다.

### 대체 텍스트

> 5.1. 대체 텍스트 <br>
5.1.1. (적절한 대체 텍스트 제공) 텍스트 아닌 콘텐츠는 그 의미나 용도를 인식할 수 
있도록 대체 텍스트를 제공해야 한다.

#### 문제 사례

##### 동영상

[movies/accessible-text-error.mp4](https://mulder21c.github.io/seminar/20171124/movies/accessible-text-error.mp4)

##### 동영상 설명

- 화면 상에는 플레이어 사용 방법에 대한 가이드 이미지가 있지만, 실제로 해당 
이미지에는 대체 텍스트가 존재하지 않기 때문에 스크린리더 사용자는 해당 내용을 
알 수 없는 문제가 발생된다.

  ```html
  <div class="operation-guide">
    <div class="dimed"></div>
    <div class="view">
      <img src="images/guide_popup.png"> <!-- 가이드 이미지 -->
    </div>
    <button class="btn-default btn-close">닫기</button>
  </div>
  ```

- 회차 목록 패널을 여는 버튼의 텍스트가 togleList라는 존재하지 않는 단어로 되어 
있고, toggle list로 인식한다 하더라도 실제로 어떤 목록(list)을 토글하는지에 대한 
정보를 알 수 없는 문제가 있다.

  ```html
  <div class="list-ui animate">
    <div class="tab">
      <div class="btns">
        <button class="btn-vod">전체회차</button>
        <button class="btn-vod">내가본영상</button>
      </div>
    </div>
    ...
  </div>
  <button class="btn-toggle btn-list-open">togleList</button>
  <figure class="player-container">
    <video id="player" preload="metadata" src="..."></video>
    ...
  </figure>
  ```

#### 해결 방법

- 텍스트가 아닌 콘텐츠(이미지 같은)에 대해 동등한 수준의 대체 텍스트나 대체 
콘텐츠를 제공

  ```html
  <img src="images/guide_popup.png"> <!-- 가이드 이미지 -->
  <div class="visible-hidden">
    단축키 안내 ...
  </div>
  ```
- 버튼 등의 인터랙션 요소에 대한 대체텍스트는 사용자가 해당 버튼을 활성화 했을 
때 어떠한 상황이 발생될지를 예측 가능하도록 제공

  ```html
  <button class="btn-toggle btn-list-open">회차 목록 열기</button>
  ```

### 자동 재생

> 5.3. 명료성 <br>
5.3.4. (자동 재생 금지) 자동으로 소리가 재생되지 않아야 한다.

#### 문제 사례

##### 동영상

[movies/autoplay-error.mp4](https://mulder21c.github.io/seminar/20171124/movies/autoplay-error.mp4)

##### 동영상 설명

미디어 플레이어가 존재하는 페이지에 접근시 바로 재생이 되어, 미디어의 소리가 
스크린리더의 음성 출력과 겹쳐서 들리고 있다.

#### 해결 방법

- 정지 상태로 제공하며 사용자가 요구할 경우에만 재생할 수 있도록 제어 기능 제공
- 자동으로 재생되는 소리는 3 초 내에 멈추거나, 지정된 키(예 : esc 키)를 누르면 
재생을 멈추도록 구현

#### 접근성 제공 사례

##### 동영상

[movies/autoplay-right.mp4](https://mulder21c.github.io/seminar/20171124/movies/autoplay-right.mp4)

##### 동영상 설명

"자동 재생"에 대한 설정 버튼을 제공함으로서 사용자가 직접 플레이어 페이지 접근 
시 재생 여부를 선택할 수 있도록 제공 되고 있다.

## 접근 가능한 미디어 플레이어 만들기

- 처음부터 접근성을 구축

  * 최소한의 접근성 지침을 준수하려는 노력
  * 접근성의 향상을 위해 WAI-ARIA 사용하는 등 사용자 경험을 향상시킬 수 있도록 
  노력
  * plug-in 보다는 HTML 자체 기술 사용 지향

- 플레이어에 접근 가능한지 확인

  * 키보드 만으로도 플레이어 활성화 가능
  * 볼륨 조절, 재생, 정지 등 컨트롤 가능

- 자동 재생 금지

  * 자동으로 재생 되지 않도록 제공
  * 자동 재생이 필요한 경우, 재생을 일시 중지하거나 중지 할 수 있는 메커니즘 제공
  * 자동 재생 여부를 사용자가 결정할 수 있도록 제공 <br>
    ![자동 재생 설정 버튼 예시](https://mulder21c.github.io/seminar/20171124/images/set-autoplay.jpg)

- 깜박이는 콘텐츠 지양

  * 깜박거리는 콘텐츠는 광과민성경련 장애가 있는 사람에게 발작을 유도
  * 포켓몬을 시청하던 12,000명의 사람들이 감광성 발작. 600명 이상의 어린이가 
  병원 입원 사례

- 원고 / 자막 / 수화 제공

  * 열린 자막 / 닫힌 자막 / 원고 제공
  * 수화 제공

- 오디오 설명 제공

  * 모든 시각 정보를 포함한 음성 오디오 트랙 제공
  * ex) 화면 해설 방송