import { useState } from 'react'
import './App.css'

// カードの色タイプ
type CardColor = 'red' | 'blue' | 'yellow' | 'white'

// 各カードの状態
interface CardState {
  id: number
  color: CardColor
  selected: boolean
}

// 初期 4 枚のカード
const initialCards: CardState[] = [
  { id: 1, color: 'red', selected: false },
  { id: 2, color: 'blue', selected: false },
  { id: 3, color: 'yellow', selected: false },
  { id: 4, color: 'white', selected: false },
]

function App() {
  // 4 枚のカード状態
  const [cards, setCards] = useState<CardState[]>(initialCards)
  // 当たりカードの id（未発表時は null）
  const [winnerId, setWinnerId] = useState<number | null>(null)
  // 結果発表済みか
  const [revealed, setRevealed] = useState(false)

  // カード選択／解除
  const toggleSelect = (id: number) => {
    if (revealed) return // 発表後は触れない
    setCards(prev =>
      prev.map(c => (c.id === id ? { ...c, selected: !c.selected } : c)),
    )
  }

  // 結果発表：選択カードから 1 枚を当選させる
  const revealResult = () => {
    if (revealed) return
    const selectedCards = cards.filter(c => c.selected)
    if (selectedCards.length === 0) return

    const winner =
      selectedCards[Math.floor(Math.random() * selectedCards.length)]
    setWinnerId(winner.id)
    setRevealed(true)
  }

  // リセット：画面タップで呼ばれる
  const resetGame = () => {
    setCards(initialCards)
    setWinnerId(null)
    setRevealed(false)
  }

  return (
    <div
      className={`app ${revealed ? 'darken' : ''}`}
      onClick={revealed ? resetGame : undefined}
    >
      <header className="app-header">
        <h1>🎴 くじ引き 🎴</h1>
      </header>

      <main className="app-main">
        {/* 4 枚のカード表示 */}
        <div className="card-grid">
          {cards.map(card => (
            <div
              key={card.id}
              className={`card back-${card.color} ${card.selected ? 'selected' : ''} ${
                revealed && card.id === winnerId ? 'winner' : ''
              } ${revealed && card.id !== winnerId ? 'loser' : ''}`}
              onClick={e => {
                e.stopPropagation()
                toggleSelect(card.id)
              }}
            />
          ))}
        </div>

        {/* 結果発表ボタン */}
        <button
          className="reveal-btn"
          disabled={revealed || cards.every(c => !c.selected)}
          onClick={revealResult}
        >
          結果発表
        </button>
      </main>
    </div>
  )
}

export default App
