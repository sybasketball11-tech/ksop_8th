// ============================================
// 미니 SNS 반응 시스템 - useState 마스터 클래스
// ============================================
// 이 프로젝트는 useState만으로 1시간 동안
// 단계별 난이도 상승형 실습을 진행합니다!
// ============================================

import { useState } from 'react';

export default function App() {
  // ============================================
  // 실습 1: 기본 Counter (0-10분)
  // ============================================
  // 
  // 📚 useState 개념:
  // useState는 React에서 상태(state)를 관리하는 Hook입니다.
  // 상태는 컴포넌트가 기억해야 하는 데이터입니다.
  //
  // 🔧 코드 구조:
  // const [상태변수, 상태변경함수] = useState(초기값);
  // 
  // - count: 현재 상태 값 (읽기 전용)
  // - setCount: 상태를 변경하는 함수
  // - useState(0): 초기값을 0으로 설정
  //
  // 💡 왜 state가 필요한가?
  // - 일반 변수는 값이 바뀌어도 화면이 업데이트되지 않습니다.
  // - state를 사용하면 값이 바뀔 때 React가 자동으로 화면을 다시 그립니다!
  //
  // 🎯 동작 원리:
  // 1. 버튼 클릭 → setCount(count + 1) 실행
  // 2. count 값이 변경됨
  // 3. React가 변경을 감지하고 컴포넌트를 다시 렌더링
  // 4. 화면에 새로운 count 값이 표시됨
  //
  // ============================================
  // ============================================
  // 실습 2: 좋아요 버튼 (10-25분)
  // ============================================
  //
  // 📚 boolean 상태 개념:
  // boolean은 true/false 두 가지 값만 가질 수 있는 데이터 타입입니다.
  // 좋아요 버튼처럼 "켜짐/꺼짐" 상태를 표현할 때 사용합니다.
  //
  // 🔧 코드 구조:
  // const [liked, setLiked] = useState(false);
  //
  // - liked: 좋아요 상태 (true = 좋아요 함, false = 좋아요 안 함)
  // - setLiked: 좋아요 상태를 변경하는 함수
  // - useState(false): 초기값을 false로 설정 (처음엔 좋아요 안 함)
  //
  // 💡 토글(Toggle)이란?
  // - 토글은 "켜고 끄기"를 반복하는 동작입니다.
  // - setLiked(!liked): 현재 값의 반대값으로 변경
  //   - liked가 true면 false로
  //   - liked가 false면 true로
  //
  // 🎯 조건부 렌더링:
  // - {liked ? "❤️" : "🤍"}: liked가 true면 ❤️, false면 🤍 표시
  // - className도 조건부로 변경하여 색상이 바뀝니다
  //
  // ============================================
  const [liked, setLiked] = useState(true);

  // ============================================
  // 실습 3: 댓글 시스템 (25-40분)
  // ============================================
  //
  // 📚 여러 개의 state 사용:
  // 하나의 컴포넌트에서 여러 개의 useState를 사용할 수 있습니다!
  //
  // 🔧 코드 구조:
  // const [text, setText] = useState("");
  // - text: 입력창에 입력한 텍스트 (문자열)
  // - setText: 텍스트를 변경하는 함수
  // - useState(""): 초기값을 빈 문자열로 설정
  //
  // const [posts, setPosts] = useState<string[]>([]);
  // - posts: 댓글 목록 (문자열 배열)
  // - setPosts: 댓글 목록을 변경하는 함수
  // - useState([]): 초기값을 빈 배열로 설정
  //
  // 💡 왜 배열을 직접 수정하면 안 되나요?
  // ❌ posts.push(text) - 절대 하지 마세요!
  // ✅ setPosts([...posts, text]) - 새로운 배열을 만들어야 합니다
  //
  // 🎯 스프레드 연산자(...)의 역할:
  // [...posts, text]는 다음과 같이 동작합니다:
  // 1. ...posts: 기존 배열의 모든 항목을 복사
  // 2. text: 새로운 항목 추가
  // 3. 결과: [기존댓글1, 기존댓글2, ..., 새댓글]
  //
  // 🔄 왜 이렇게 해야 하나요?
  // React는 상태가 "새로운 값"으로 바뀌었을 때만 변경을 감지합니다.
  // 배열을 직접 수정하면 React가 변경을 감지하지 못합니다!
  //
  // ============================================
  const [text, setText] = useState("");
  const [posts, setPosts] = useState<string[]>([]);

  // ============================================
  // 실습 4: 다크모드 토글 (40-55분)
  // ============================================
  //
  // 📚 전역적인 효과를 내는 useState:
  // dark 상태 하나로 전체 페이지의 스타일을 제어할 수 있습니다!
  //
  // 🔧 코드 구조:
  // const [dark, setDark] = useState(false);
  //
  // - dark: 다크모드 상태 (true = 다크모드, false = 라이트모드)
  // - setDark: 다크모드 상태를 변경하는 함수
  // - useState(false): 초기값을 false로 설정 (처음엔 라이트모드)
  //
  // 💡 조건부 className:
  // className={dark ? "bg-black text-white" : "bg-white text-black"}
  // - dark가 true면: 검은 배경, 흰 글자
  // - dark가 false면: 흰 배경, 검은 글자
  //
  // 🎯 동작 원리:
  // 1. 다크모드 버튼 클릭 → setDark(!dark) 실행
  // 2. dark 값이 true/false로 토글됨
  // 3. 모든 요소의 className이 조건부로 변경됨
  // 4. 전체 페이지의 색상이 한 번에 바뀜!
  //
  // 🌟 useState의 힘:
  // - 하나의 state로 전체 페이지를 제어할 수 있습니다
  // - 전역 변수처럼 보이지만, React의 상태 관리 시스템을 사용합니다
  //
  // ============================================
  const [dark, setDark] = useState(false);

  // ============================================
  // 댓글 등록 함수
  // ============================================
  // 📚 함수를 만들어서 이벤트 처리:
  // 버튼 클릭 시 실행할 로직을 함수로 분리합니다.
  //
  // 🔧 코드 구조:
  // const handleAddPost = () => { ... }
  //
  // 💡 동작 순서:
  // 1. text.trim() !== "": 빈 댓글은 등록하지 않음
  // 2. setPosts([...posts, text]): 댓글 목록에 새 댓글 추가
  // 3. setText(""): 입력창을 비워서 다음 댓글을 입력할 수 있게 함
  //
  // 🎯 왜 두 개의 setState를 사용하나요?
  // - setPosts: 댓글 목록 업데이트 (화면에 댓글 표시)
  // - setText: 입력창 초기화 (사용자 경험 개선)
  //
  // ============================================
  const handleAddPost = () => {
    if (text.trim() !== "") {
      // 새로운 배열을 만들어서 추가 (중요!)
      // 기존 배열을 복사하고 새 항목을 추가
      setPosts([...posts, text]);
      setText(""); // 입력창 비우기
    }
  };

  // ============================================
  // Enter 키로 댓글 등록
  // ============================================
  // 📚 키보드 이벤트 처리:
  // 사용자가 Enter 키를 누르면 댓글이 등록되도록 합니다.
  //
  // 🔧 코드 구조:
  // const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => { ... }
  //
  // 💡 이벤트 객체 (e):
  // - e.key: 눌린 키의 이름 ('Enter', 'Escape' 등)
  // - e.key === 'Enter': Enter 키가 눌렸는지 확인
  //
  // 🎯 사용자 경험 개선:
  // - 버튼 클릭뿐만 아니라 Enter 키로도 댓글 등록 가능
  // - 더 빠르고 편리한 입력 경험 제공
  //
  // ============================================
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddPost();
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      dark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* 헤더 */}
        <header className={`mb-8 p-6 rounded-lg shadow-lg ${
          dark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h1 className="text-3xl font-bold mb-2">미니 SNS 반응 시스템</h1>
          <p className={`${dark ? 'text-gray-300' : 'text-gray-600'}`}>
            useState만으로 만든 인터랙티브 웹페이지
          </p>
        </header>

        {/* ============================================
            실습 1: 기본 Counter (0-10분)
            ============================================
            
            📚 useState의 기본 사용법:
            - count: 현재 상태 값 (읽기 전용, 화면에 표시)
            - setCount: 상태를 변경하는 함수 (값을 바꿀 때 사용)
            
            🔧 코드 구조:
            const [count, setCount] = useState(0);
            
            💡 이벤트 핸들러:
            onClick={() => setCount(count + 1)}
            - 버튼 클릭 시 실행되는 함수
            - count + 1: 현재 값에 1을 더함
            - setCount: 새로운 값으로 상태 업데이트
            
            🎯 렌더링 과정:
            1. 버튼 클릭
            2. setCount(count + 1) 실행
            3. count 값이 변경됨 (예: 0 → 1)
            4. React가 변경을 감지
            5. 컴포넌트가 다시 렌더링됨
            6. 화면에 새로운 count 값 표시
            
            ⚠️ 중요한 점:
            - count를 직접 수정하면 안 됩니다! (count = 5 ❌)
            - 반드시 setCount를 사용해야 합니다! (setCount(5) ✅)
            
        */}
        <section className={`mb-8 p-6 rounded-lg shadow-lg ${
          dark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h2 className="text-2xl font-bold mb-4">실습 1: 기본 Counter</h2>
          <p className={`mb-4 ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
            useState를 사용하여 숫자를 증가/감소시키는 카운터를 만듭니다.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-4">
            <button
              onClick={() => setCount(count - 2)}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              -
            </button>
            
            <div className={`text-5xl font-bold min-w-[100px] text-center ${
              dark ? 'text-white' : 'text-gray-800'
            }`}>
              {count}
            </div>
            
            <button
              onClick={() => setCount(count + 2)}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              +
            </button>
          </div>

          <button
            onClick={() => setCount(0)}
            className="w-full py-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all"
          >
            리셋
          </button>

          <div className={`mt-4 p-4 rounded-lg ${dark ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <p className="text-sm font-mono">
              const [count, setCount] = useState(100);
            </p>
            <p className="text-sm font-mono mt-2">
              {'<button onClick={() => setCount(count + 1)}>+</button>'}
            </p>
          </div>
        </section>

        {/* ============================================
            실습 2: 좋아요 버튼 (10-25분)
            ============================================
            
            📚 boolean 상태를 사용한 토글 기능:
            - liked: 좋아요 상태 (true = 좋아요 함, false = 좋아요 안 함)
            - setLiked: 좋아요 상태를 변경하는 함수
            - !liked: 현재 값의 반대값 (토글)
            
            🔧 코드 구조:
            onClick={() => setLiked(!liked)}
            - !liked: liked가 true면 false로, false면 true로 변경
            
            💡 조건부 렌더링 (삼항 연산자):
            {liked ? "❤️ 좋아요" : "🤍 좋아요"}
            - liked가 true면: "❤️ 좋아요" 표시
            - liked가 false면: "🤍 좋아요" 표시
            
            🎨 조건부 스타일링:
            className={liked ? "bg-red-500" : "bg-gray-200"}
            - liked가 true면: 빨간 배경
            - liked가 false면: 회색 배경
            
            🎯 동작 원리:
            1. 버튼 클릭 → setLiked(!liked) 실행
            2. liked 값이 토글됨 (true ↔ false)
            3. 조건부 렌더링으로 아이콘과 색상이 자동으로 변경됨
            4. 화면이 자동으로 업데이트됨
            
        */}
        <section className={`mb-8 p-6 rounded-lg shadow-lg ${
          dark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h2 className="text-2xl font-bold mb-4">실습 2: 좋아요 버튼</h2>
          <p className={`mb-4 ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
            boolean 상태를 사용하여 좋아요 버튼을 토글합니다.
            클릭할 때마다 아이콘과 색상이 바뀝니다!
          </p>
          
          <div className="flex items-center justify-center">
            <button
              onClick={() => setLiked(!liked)}
              className={`px-8 py-4 rounded-lg font-bold text-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2 ${
                liked
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              {liked ? (
                <>
                  <span className="text-2xl">❤️</span>
                  <span>안녕하세요</span>
                </>
              ) : (
                <>
                  <span className="text-2xl">🤍</span>
                  <span>안녕히계세요</span>
                </>
              )}
            </button>
          </div>

          <div className={`mt-4 p-4 rounded-lg ${dark ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <p className="text-sm font-mono">
              const [liked, setLiked] = useState(false);
            </p>
            <p className="text-sm font-mono mt-2">
              {'<button onClick={() => setLiked(!liked)}>'}
            </p>
            <p className="text-sm font-mono ml-4">
              {liked ? "❤️ 좋아요" : "🤍 좋아요"}
            </p>
            <p className="text-sm font-mono">{'</button>'}</p>
          </div>
        </section>

        {/* ============================================
            실습 3: 댓글 시스템 (25-40분)
            ============================================
            
            📚 두 개의 state 사용:
            - text: 입력창의 텍스트 (문자열)
            - posts: 댓글 목록 (문자열 배열)
            
            🔧 input 상태 관리:
            <input 
              value={text} 
              onChange={(e) => setText(e.target.value)}
            />
            - value={text}: 입력창의 값을 text state와 연결 (제어 컴포넌트)
            - onChange: 입력할 때마다 실행되는 함수
            - e.target.value: 입력한 텍스트 값
            
            💡 배열에 항목 추가하기:
            setPosts([...posts, text])
            - ...posts: 기존 배열의 모든 항목 복사 (스프레드 연산자)
            - text: 새로 추가할 댓글
            - 결과: [기존댓글1, 기존댓글2, ..., 새댓글]
            
            ⚠️ 절대 하지 말아야 할 것:
            ❌ posts.push(text) - 배열을 직접 수정하면 안 됩니다!
            ❌ setPosts(posts.push(text)) - 이것도 안 됩니다!
            
            ✅ 올바른 방법:
            ✅ setPosts([...posts, text]) - 새로운 배열을 만들어야 합니다!
            
            🎯 왜 새로운 배열을 만들어야 하나요?
            - React는 상태가 "새로운 값"으로 바뀌었을 때만 변경을 감지합니다
            - 배열을 직접 수정하면 React가 변경을 감지하지 못합니다
            - 새로운 배열을 만들면 React가 "아, 배열이 바뀌었구나!" 하고 알 수 있습니다
            
            🔄 map 함수로 리스트 렌더링:
            {posts.map((post, index) => <li key={index}>{post}</li>)}
            - posts 배열의 각 항목을 <li> 요소로 변환
            - key={index}: React가 각 항목을 구분하기 위한 고유 키
            
        */}
        <section className={`mb-8 p-6 rounded-lg shadow-lg ${
          dark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h2 className="text-2xl font-bold mb-4">실습 3: 한 줄 댓글 시스템</h2>
          <p className={`mb-4 ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
            input 상태와 배열 상태를 관리하여 댓글을 추가합니다.
            입력한 값이 바로 UI에 반영되는 경험을 배웁니다!
          </p>
          
          {/* 댓글 입력 영역 */}
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="댓글을 입력하세요..."
              className={`flex-1 px-4 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 ${
                dark
                  ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500'
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500'
              }`}
            />
            <button
              onClick={handleAddPost}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              등록하기
            </button>
          </div>

          {/* 댓글 목록 */}
          <div className={`rounded-lg ${
            dark ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            {posts.length === 0 ? (
              <p className={`p-4 text-center ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                아직 댓글이 없습니다. 첫 댓글을 작성해보세요!
              </p>
            ) : (
              <ul className="divide-y divide-gray-300">
                {posts.map((post, index) => (
                  <li
                    key={index}
                    className={`p-4 ${dark ? 'hover:bg-gray-600' : 'hover:bg-gray-100'} transition-colors`}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`text-2xl ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                        💬
                      </span>
                      <span className={`flex-1 ${dark ? 'text-gray-200' : 'text-gray-800'}`}>
                        {post}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={`mt-4 p-4 rounded-lg ${dark ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <p className="text-sm font-mono">
              const [text, setText] = useState("");
            </p>
            <p className="text-sm font-mono">
              const [posts, setPosts] = useState([]);
            </p>
            <p className="text-sm font-mono mt-2">
              {'<input value={text} onChange={(e) => setText(e.target.value)} />'}
            </p>
            <p className="text-sm font-mono mt-2">
              {'setPosts([...posts, text])'}
            </p>
          </div>
        </section>

        {/* ============================================
            실습 4: 다크모드 토글 (40-55분)
            ============================================
            
            📚 전역적인 효과를 내는 useState:
            - dark: 다크모드 상태 (true = 다크모드, false = 라이트모드)
            - 하나의 state로 전체 페이지의 스타일을 제어할 수 있습니다!
            
            🔧 조건부 className:
            className={dark ? "bg-black text-white" : "bg-white text-black"}
            - dark가 true면: 검은 배경, 흰 글자
            - dark가 false면: 흰 배경, 검은 글자
            
            💡 템플릿 리터럴 사용:
            className={`min-h-screen ${dark ? 'bg-gray-900' : 'bg-gray-50'}`}
            - 백틱(`)과 ${}를 사용하여 동적으로 className 조합
            - 여러 클래스를 조건부로 적용 가능
            
            🎯 동작 원리:
            1. 다크모드 버튼 클릭 → setDark(!dark) 실행
            2. dark 값이 토글됨 (true ↔ false)
            3. 모든 요소의 className이 조건부로 변경됨
            4. 전체 페이지의 색상이 한 번에 바뀜!
            
            🌟 useState의 힘:
            - 하나의 state로 전체 페이지를 제어할 수 있습니다
            - 전역 변수처럼 보이지만, React의 상태 관리 시스템을 사용합니다
            - 상태가 바뀌면 관련된 모든 요소가 자동으로 업데이트됩니다
            
            🎨 transition-colors:
            - Tailwind의 transition 클래스
            - 색상 변경 시 부드러운 애니메이션 효과
            
        */}
        <section className={`mb-8 p-6 rounded-lg shadow-lg ${
          dark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h2 className="text-2xl font-bold mb-4">실습 4: 다크모드 토글</h2>
          <p className={`mb-4 ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
            useState로 다크모드를 구현합니다.
            버튼을 클릭하면 전체 페이지의 테마가 바뀝니다!
          </p>
          
          <div className="flex items-center justify-center">
            <button
              onClick={() => setDark(!dark)}
              className={`px-8 py-4 rounded-lg font-bold text-lg shadow-md hover:shadow-lg transition-all ${
                dark
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900'
                  : 'bg-gray-800 hover:bg-gray-900 text-white'
              }`}
            >
              {dark ? (
                <>
                  <span className="text-2xl mr-2">☀️</span>
                  라이트 모드
                </>
              ) : (
                <>
                  <span className="text-2xl mr-2">🌙</span>
                  다크 모드
                </>
              )}
            </button>
          </div>

          <div className={`mt-4 p-4 rounded-lg ${dark ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <p className="text-sm font-mono">
              const [dark, setDark] = useState(false);
            </p>
            <p className="text-sm font-mono mt-2">
              {'<div className={dark ? "bg-black text-white" : "bg-white text-black"}>'}
            </p>
            <p className="text-sm font-mono mt-2">
              {'<button onClick={() => setDark(!dark)}>'}
            </p>
            <p className="text-sm font-mono ml-4">
              {dark ? "라이트 모드" : "다크 모드"}
            </p>
            <p className="text-sm font-mono">{'</button>'}</p>
          </div>
        </section>

        {/* ============================================
            최종 통합: 미니 SNS 페이지 (55-60분)
            ============================================
            
            📚 useState 통합 활용:
            - 위에서 만든 모든 state를 하나의 컴포넌트에서 사용합니다
            - count, liked, text, posts, dark - 총 5개의 state!
            
            🔧 컴포넌트 구조:
            - 하나의 컴포넌트에서 여러 state를 관리
            - 각 state는 독립적으로 동작하지만 함께 사용 가능
            - 예: 다크모드가 켜져도 좋아요 버튼과 댓글이 정상 작동
            
            💡 State의 독립성:
            - 각 state는 서로 영향을 주지 않습니다
            - liked를 바꿔도 posts는 변하지 않습니다
            - dark를 바꿔도 count는 변하지 않습니다
            
            🎯 실제 SNS처럼 보이게 만들기:
            - 좋아요 버튼: boolean state로 구현
            - 댓글 시스템: 배열 state로 구현
            - 다크모드: 조건부 className으로 구현
            - 모든 기능이 useState만으로 구현됨!
            
            🌟 useState만으로 할 수 있는 것:
            - 숫자 카운터
            - 좋아요/북마크 토글
            - 댓글/게시글 목록
            - 다크모드/라이트모드
            - 폼 입력 관리
            - 모달 열기/닫기
            - 등등... 정말 많은 것들을 할 수 있습니다!
            
            🎉 완성!
            - useState만으로 인터랙티브한 웹페이지를 만들 수 있습니다
            - 각 기능이 어떻게 동작하는지 완전히 이해했습니다
            - 이제 더 복잡한 기능도 만들 수 있습니다!
            
        */}
        <section className={`p-6 rounded-lg shadow-lg border-2 ${
          dark
            ? 'bg-gray-800 border-purple-500'
            : 'bg-gradient-to-br from-blue-50 to-purple-50 border-purple-300'
        }`}>
          <h2 className="text-2xl font-bold mb-4">🎉 최종 통합: 미니 SNS 페이지</h2>
          <p className={`mb-6 ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
            위에서 만든 모든 기능이 하나의 페이지에 통합되었습니다!
            useState만으로 이렇게 멋진 인터랙티브 웹페이지를 만들 수 있어요.
          </p>
          
          <div className={`p-6 rounded-lg mb-4 ${
            dark ? 'bg-gray-700' : 'bg-white'
          }`}>
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-300">
              <h3 className="text-xl font-bold">오늘의 포스트</h3>
              <button
                onClick={() => setLiked(!liked)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  liked
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
              >
                {liked ? '❤️ 좋아요' : '🤍 좋아요'}
              </button>
            </div>
            
            <p className={`mb-4 ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
              useState를 배우는 하루! 정말 재미있네요! 🚀
            </p>
            
            <div className={`mt-4 p-4 rounded-lg ${
              dark ? 'bg-gray-600' : 'bg-gray-50'
            }`}>
              <h4 className="font-semibold mb-2">댓글 {posts.length}개</h4>
              {posts.length > 0 && (
                <ul className="space-y-2">
                  {posts.slice(0, 3).map((post, index) => (
                    <li key={index} className={`text-sm ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
                      💬 {post}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

