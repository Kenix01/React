import Simpson from "./components/Simpson";


function App() {
    return (
        <div className="App">
            <Simpson
                item={'Bart Simpson'}
                pic={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
                info={'Бартолом\'ю ДжоДжо «Барт» Сімпсон— один із головних героїв мультиплікаційного серіалу Сімпсони.' +
                    ' Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — ' +
                    'Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі.' +
                    ' Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.'}
            />
            <Simpson
                item={'Homer Simpson'}
                pic={'https://upload.wikimedia.org/wikipedia/uk/thumb/0/02/Homer_Simpson_2006.png/300px-Homer_Simpson_2006.png'}
                info={'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони».' +
                    'Гомер — милий та кумедний, проте іноді грубий і неввічливий батько родини. ' +
                    'Він має очевидні вади: товстий, лисий і не дуже розумний.' +
                    ' Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, ' +
                    'але все ж лишається симпатичним.'}
            />
            <Simpson
                item={'Marge Simpson'}
                pic={'https://upload.wikimedia.org/wikipedia/uk/thumb/0/0b/Marge_Simpson.png/300px-Marge_Simpson.png'}
                info={'Марджорі (Мардж) Сімпсон (дівоче прізвище — Був\'є) (англ. Marjorie "Marge" Simpson, née Bouvier) — один з головних персонажів анімаційного серіалу Сімпсони, дружина Гомера Сімпсона, мати Ліси та Барта. Домогосподарка, майже весь свій час проводить удома доглядаючи наймолодшу дитину Меґґі, а також Барта, Лісу і чоловіка.'}
            />

            <Simpson
                item={'Lisa Simpson'}
                pic={'https://upload.wikimedia.org/wikipedia/uk/thumb/a/ae/Lisasmiling.png/255px-Lisasmiling.png'}
                info={'Ліса — надзвичайно розумна восьмирічна дівчинка, одина з найрозумніших у серіалі (за даними різних серій її IQ становить 156 чи 159). Феміністка. Грає на саксофоні. Полюбляє дивитися мультфільм «Чух і Сверблячка» разом з сім\'єю.'}
            />
            <Simpson
                item={'Maggie Simpson'}
                pic={'https://upload.wikimedia.org/wikipedia/uk/9/9d/Maggie_Simpson.png'}
                info={'Маргарет «Меґґі» Сімпсон (англ. Margaret "Maggie" Simpson) — одна з головних героїв мультсеріалу Сімпсони, найменша дочка Гомера Сімпсона та Мардж Сімпсон. Протягом усіх років серіалу Меґґі не росте і завжди залишається немовлям у повзунках та підгузнику. Попри свій вік Меґґі потрапляє в різні пригоди разом зі своїм братом Бартом та сестрою Лісою. В одному з серіалів про майбутнє Ліси, Меґґі з\'являється дорослою, але навіть там у неї немає слів.'}
            />
        </div>
    );
}


export default App;
