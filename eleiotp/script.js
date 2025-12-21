let codesData = [];

async function fetchOTP(){
    try{
        const res = await fetch("/api/otp");
        const data = await res.json();
        if(data.success){
            codesData = data.codes.map(acc => ({...acc}));

            const countdownFromServer = codesData[0]?.countdown || 30;
            const globalSecEl = document.getElementById("globalCountdown");
            globalSecEl.textContent = countdownFromServer;

            renderCard();
        }
    }catch(e){
        console.error("loi khi lay otp:", e);
    }
}

function renderCard(){
    const grid = document.getElementById("otpGrid");
    grid.innerHTML = '';
    codesData.forEach((acc, i)=>{
        const percentage = (acc.countdown/30)*100;
        const card = document.createElement("div");
        card.className = "otp-card animate__animated animate__fadeInUp";
        card.style.animationDelay = `${i*0.1}s`;

        card.innerHTML = `
            <div>
                <span class="account-name">${acc.name}</span><br>
                <span class="issuer">${acc.issuer}</span>
            </div>
            <div class="otp-code" id="otp-${i}">${acc.code}</div>
            <div class="timer-bar-container">
                <div class="timer-bar" id="bar-${i}" style="width:${percentage}%"></div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function countdown(){
    setInterval(()=>{
        const globalSecEl = document.getElementById("globalCountdown");
        let globalSec = parseInt(globalSecEl.textContent);

        if(globalSec>0) globalSec--;
        globalSecEl.textContent = `${globalSec}s`;

        codesData.forEach((acc, i)=>{
            if(acc.countdown>0) acc.countdown--;
            const bar = document.getElementById(`bar-${i}`);
            if(bar){
                const percentage = (acc.countdown/30)*100;
                bar.style.width = `${percentage}%`;
                bar.style.background = acc.countdown<5 ? "#ef4444" : "var(--accent-color)";
            }
        });

        if(globalSec<=0){
            fetchOTP();
        }
    }, 1000);
}

fetchOTP();
countdown();
