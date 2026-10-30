* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: 'Inter', sans-serif;
  background: #040c17;
  color: #f3f6fb;
}

body {
  min-height: 100vh;
}

button, input {
  font: inherit;
}

button {
  cursor: pointer;
}

#app {
  min-height: 100vh;
}

.page-shell {
  min-height: 100vh;
  background: radial-gradient(circle at top, rgba(32, 59, 78, 0.82), rgba(3, 9, 17, 1) 48%);
  display: flex;
  flex-direction: column;
}

.topbar {
  padding: 18px 16px 0;
}

.status-bar,
.browser-bar,
.main-nav,
.content,
.mobile-nav {
  max-width: 1360px;
  margin: 0 auto;
}

.status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #e8edf5;
  font-weight: 600;
  letter-spacing: 0.08em;
  padding: 4px 8px 16px;
}

.status-icons {
  display: flex;
  gap: 10px;
  font-size: 14px;
  opacity: 0.9;
}

.browser-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 30px;
  padding: 12px 18px;
  box-shadow: inset 0 0 15px rgba(255,255,255,0.02);
}

.browser-left {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.02rem;
  color: #e8edf5;
  opacity: 0.8;
}

.browser-url {
  font-size: 1.15rem;
}

.icon-button {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.06);
  color: #fff;
}

.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
  padding-bottom: 12px;
}

.brand-wrap {
  display: flex;
  align-items: center;
}

.brand-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-weight: 900;
  letter-spacing: -0.08em;
  font-size: clamp(1.7rem, 2.5vw, 3rem);
  color: #fff;
}

.brand-logo .brand-prince {
  background: linear-gradient(135deg, #f4f4f4 0%, #b5c4ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.brand-logo .brand-movie {
  background: linear-gradient(135deg, #ff9900 0%, #ff4f8b 40%, #8d6dff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.content {
  flex: 1;
  padding: 18px 16px 88px;
}

.hero {
  position: relative;
  min-height: 620px;
  display: flex;
  align-items: flex-end;
  border-radius: 24px;
  overflow: hidden;
  margin-top: 26px;
  background: #08111b;
  box-shadow: 0 36px 100px rgba(3, 8, 16, 0.6);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: saturate(1.2);
}

.hero-content {
  position: relative;
  z-index: 1;
  padding: 48px 52px 24px;
  max-width: 760px;
}

.hero-kicker {
  color: #ff9b44;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.12em;
  font-size: 0.83rem;
  margin-bottom: 12px;
}

.hero-content h1 {
  font-size: clamp(4.2rem, 8vw, 11rem);
  line-height: 0.82;
  letter-spacing: -0.08em;
  margin: 0;
  font-weight: 900;
  color: #f4f6f8;
}

.hero-content p {
  margin-top: 22px;
  color: rgba(244, 246, 248, 0.82);
  font-size: clamp(1rem, 1.2vw, 1.35rem);
  line-height: 1.62;
  max-width: 760px;
}

.meta-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 18px;
  color: rgba(244, 246, 248, 0.9);
  font-weight: 600;
  font-size: 1.1rem;
}

.meta-row .rating {
  color: #72f0a7;
}

.play-button,
.primary-button {
  border: none;
  background: linear-gradient(135deg, #ff9a3d, #ff7f2e);
  color: #fff;
  font-weight: 800;
  border-radius: 16px;
  padding: 18px 34px;
  font-size: 1.08rem;
  box-shadow: 0 18px 35px rgba(255, 125, 38, 0.35);
  transition: transform 0.2s ease;
}

.play-button:hover,
.primary-button:hover {
  transform: translateY(-1px);
}

.category-toolbar {
  margin-top: 30px;
}

.toolbar-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.category-pill {
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.02);
  color: rgba(255,255,255,0.84);
  border-radius: 999px;
  padding: 10px 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.76rem;
}

.category-pill.active {
  background: rgba(255, 160, 70, 0.14);
  border-color: rgba(255, 160, 70, 0.35);
  color: #ffaf48;
}

.media-grid-section {
  margin-top: 32px;
}

.grid-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.grid-header h2 {
  margin: 0;
  font-size: clamp(1.6rem, 2vw, 2.4rem);
  text-transform: uppercase;
  letter-spacing: -0.05em;
}

.ghost-action {
  border: 1px solid rgba(255,255,255,0.08);
  background: transparent;
  color: rgba(255,255,255,0.8);
  border-radius: 12px;
  padding: 10px 14px;
}

.media-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 18px;
}

.media-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px;
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.media-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 160, 70, 0.35);
}

.poster {
  aspect-ratio: 2 / 3;
  background-size: cover;
  background-position: center;
}

.card-body {
  padding: 14px 14px 16px;
}

.card-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.card-title-row h3 {
  margin: 0;
  font-size: 1.1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-title-row span {
  color: #70d99d;
  font-weight: 700;
}

.card-body p {
  margin: 10px 0 0;
  color: rgba(255,255,255,0.7);
}

.mobile-nav {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: min(100%, 720px);
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
  background: rgba(7, 12, 18, 0.9);
  border-top: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(18px);
  padding: 10px 14px 18px;
  z-index: 20;
}

.nav-item {
  background: transparent;
  color: rgba(255,255,255,0.75);
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 4px;
}

.nav-item.active {
  color: #fff;
}

.auth-shell {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
  position: relative;
  overflow: hidden;
  background: #060e19;
}

.auth-backdrop {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 20%, rgba(132, 90, 255, 0.3), transparent 35%),
    radial-gradient(circle at 70% 30%, rgba(255, 131, 0, 0.2), transparent 30%),
    linear-gradient(180deg, rgba(6, 9, 18, 1), rgba(8, 11, 22, 1));
}

.auth-card {
  position: relative;
  z-index: 1;
  width: min(100%, 520px);
  background: rgba(11, 18, 30, 0.92);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 28px;
  padding: 28px 22px 20px;
  box-shadow: 0 30px 80px rgba(0,0,0,0.45);
}

.auth-logo-wrap {
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
}

.auth-tab-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin: 16px 0 18px;
}

.auth-tab {
  background: rgba(255,255,255,0.03);
  color: rgba(255,255,255,0.8);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 12px 14px;
  font-weight: 700;
}

.auth-tab.active {
  background: rgba(255, 160, 70, 0.12);
  border-color: rgba(255, 160, 70, 0.35);
  color: #ffb259;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.auth-form label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 600;
  color: rgba(255,255,255,0.8);
}

.auth-form input {
  width: 100%;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.03);
  padding: 16px 14px;
  color: white;
}

.auth-form input::placeholder {
  color: rgba(255,255,255,0.28);
}

.api-status {
  margin-top: 20px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255,255,255,0.72);
  font-size: 0.86rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #67f0a8;
  box-shadow: 0 0 18px rgba(103,240,168,0.8);
}

.player-modal {
  position: fixed;
  inset: 0;
  z-index: 35;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px;
}

.modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(3, 7, 13, 0.72);
}

.player-panel {
  position: relative;
  z-index: 1;
  width: min(100%, 1000px);
  background: rgba(10, 16, 25, 0.95);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 24px;
  padding: 18px;
  box-shadow: 0 30px 80px rgba(0,0,0,0.45);
}

.player-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 10px;
}

.eyebrow {
  display: inline-block;
  color: #ffb355;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
  font-size: 0.72rem;
  margin-bottom: 4px;
}

.player-header h3 {
  margin: 0;
  font-size: clamp(1.4rem, 2vw, 2.2rem);
}

.close-player {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: none;
  background: rgba(255,255,255,0.08);
  color: white;
  font-size: 1.2rem;
}

video {
  width: 100%;
  border-radius: 18px;
  background: #02060c;
  aspect-ratio: 16 / 9;
  border: 1px solid rgba(255,255,255,0.08);
}

.server-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 16px;
}

.server-button {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.84);
  border-radius: 10px;
  padding: 12px 14px;
  font-weight: 700;
}

.server-button.active {
  background: rgba(255, 152, 67, 0.14);
  border-color: rgba(255, 152, 67, 0.5);
  color: #ffb55d;
}

@media (max-width: 640px) {
  .status-bar {
    font-size: 0.72rem;
  }

  .browser-url {
    font-size: 0.96rem;
  }

  .hero {
    min-height: 560px;
  }

  .hero-content {
    padding: 28px 20px 18px;
  }

  .hero-kicker {
    font-size: 0.65rem;
    letter-spacing: 0.08em;
  }

  .hero-content h1 {
    font-size: 4.2rem;
  }

  .meta-row {
    font-size: 0.92rem;
  }

  .play-button {
    width: 100%;
  }
}
