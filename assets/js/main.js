function stopWatcher() {
    const stopWatch = document.querySelector('#stopwatch') //Cronômetro
    let seconds = 0; 
    let timer; 
    
    /* Evento
        - Seleciona o elemento que foi clicado no documento HTML
    */
    document.addEventListener('click', (e) => {
        const el = e.target // elemento = o alvo do evento
    
        /* Botão Start
            - Interrompe o intervalo, para que não tenha dois timers rodando
            - Remove a class time-stop do cronômetro (Cor preta do Texto)
            - Chamada para a função que inicia o cronômetro
        */
        if (el.classList.contains('start')) {
            clearInterval(timer)
            stopWatch.classList.remove('time-stop')
            startTimer(seconds)
        }
    
        /* Botão Stop
            - Para o cronômetro 
            - Adiciona a classe time-stop ao cronômetro (Cor preta do texto)
        */
        if (el.classList.contains('stop')) {
            clearInterval(timer)
            stopWatch.classList.add('time-stop')
        }
    
        /* Botão End
            - Redefine os segundos como 0 
            - Atualiza o cronômetro para o momento inicial (00:00:00)
            - Remove a classe time-stop ao cronômetro (Cor preta do texto)
            - Para o cronômetro
        */  
        if (el.classList.contains('end')) {
            seconds = 0;
            stopWatch.classList.remove('time-stop')
            stopWatch.innerHTML = setTimer(seconds)
            clearInterval(timer)
        }
    })
    
    /* Função 
        - Incrementa os segundos a cada segundo da função setInterval()
        - Atualiza o cronomêtro a cada 1 segundo
    */
    const startTimer = (seconds) => {
        timer = setInterval(() => {
            seconds++
            stopWatch.innerHTML = setTimer(seconds)
        }, 1000)
    }
    
    /* Função 
        - Define as horas, minutos e segundos
        - A variável seconds é utilizada para aumentar a hora de segundos em segundos
        - Retorna a porção hora formatada para o idioma brasileiro
    */
    const setTimer = (seconds) => {
        const data = new Date()
        data.setHours(0, 0, seconds)
        return data.toLocaleTimeString('pt-BR', {timeStyle:"medium"})
    }    
}
stopWatcher()
