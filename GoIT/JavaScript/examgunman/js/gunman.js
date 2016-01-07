$(function(){
    var __self = this;

    var game = $('.game');
    var header = $('.header');
    var footer = $('.footer');

    var audio = $('.audio');
    var page = $('body');

    var fireMsg = $('<div></div>');
    fireMsg.addClass('fire');
    fireMsg.html('fire !!!');

    var gunMan = $('<div></div>');
    gunMan.addClass('gunman');

    var playBtn = $('<div></div>');
    playBtn.addClass('playBtn');
    playBtn.html('<p></p>');
    playBtn.find('p').text('play');
    playBtn.find('p').addClass('playBtn__text');

    var paranja = $('<div></div>');
    paranja.addClass('paranja');
    header.append(paranja);
    game.append(paranja);
    footer.append(paranja);
    paranja.css('display', 'none');

    var winMsg = $('<p></p>');
    winMsg.addClass('result__msg');
    winMsg.html('you win!!!');
    game.append(winMsg);
    winMsg.css('display', 'none');

    var loseMsg = $('<p></p>');
    loseMsg.addClass('result__msg');
    loseMsg.html("you lose!");
    game.append(loseMsg);
    loseMsg.css('display', 'none');

    var gameOverMsg = $('<p></p>');
    gameOverMsg.addClass('result__msg');
    gameOverMsg.html("Game over!");
    game.append(gameOverMsg);
    gameOverMsg.css('display', 'none');

    var timerIdStart,
        gunManTime = 1;

    var score = $('.score__span');
    var yoursSpeed = $('.speed__counters_you');

    $('.speed__counters_gunman').html(' ' +gunManTime);

    setTimeout(function () {
        game.append(playBtn);
    }, 1000);

    playBtn.on('click', function () {
        $('.speed__counters_you').html('');

        playBtn.css('display', 'none');
        gunMan.css('display', '');

        audio.attr('src', 'audio/intro.m4a');

        __self.steps();
        __self.fire();
    });
    this.steps = function () {
        setTimeout(function(){
            game.append(gunMan);
        }, 1000);

        setTimeout(function(){
            gunMan.css('left', '+=120');
            gunMan.css('top', '+=10');
        }, 2000);

        setTimeout(function(){
            gunMan.css('left', '+=100');
            gunMan.css('top', '+=15');
        }, 3000);

        setTimeout(function(){
            gunMan.css('left', '+=80');
            gunMan.css('top', '+=25');
        }, 4000);

        setTimeout(function(){
            gunMan.css('left', '+=50');
            gunMan.css('top', '+=35');
        }, 5000);
    };

    this.win = function () {
        var tempCash = +$('.score__span').text();
        tempCash += 100;

        setTimeout(function(){
            gunMan.css('background-position', '-485px 0');
        }, 1000);

        setTimeout(function(){
            gunMan.css('background-position', '-555px 0');
        }, 1500);

        setTimeout(function(){
            fireMsg.css('display', 'none');
        }, 3000);

        setTimeout(function(){
        }, 4000);

        setTimeout(function(){
            paranja.css('display', '');
            audio.attr('src', 'audio/win.m4a');
            winMsg.css('display', '');

            $('.score__span').text(tempCash);
        }, 3000);

        setTimeout(function(){
            gunMan.css('display', 'none');
        }, 6000);

        setTimeout(function(){
            winMsg.css('display', 'none');
        }, 7000);

        setTimeout(function(){
            paranja.css('display', 'none');
            playBtn.css('display', '');
            playBtn.find('p').text('next round');
            playBtn.css('height', '75');

            gunMan.css('top', '130px');
            gunMan.css('left', '0');
            gunMan.css('background-position', '0 0');

            gunManTime -= 0.1;
        }, 9000);
    };

    this.lose = function () {
        var tempCash = +$('.score__span').text();
        tempCash -= 100;

        if (tempCash < 0) {
            __self.gameOver();
            return;
        }
        gunMan.css('background-position', '-415px 0');
        fireMsg.css('display', 'none');
        paranja.css('display', 'block');

        setTimeout(function(){
            loseMsg.css('display', '');
            audio.attr('src', 'audio/death.m4a');

            $('.score__span').text(tempCash);
        }, 1000);

        setTimeout(function(){
            gunMan.css('display', 'none');
        }, 6000);

        setTimeout(function(){
            paranja.css('display', 'none');
            loseMsg.css('display', 'none');
            playBtn.css('display', '');
            playBtn.find('p').text('next round');
            playBtn.css('height', '75');

            gunMan.css('top', '130px');
            gunMan.css('left', '0');
            gunMan.css('background-position', '0 0');

        }, 9000);
    };

    this.gameOver = function () {
        gunMan.css('background-position', '-415px 0');
        paranja.css('display', 'block');

        setTimeout(function(){
            audio.attr('src', 'audio/death.m4a');
        }, 1000);

        setTimeout(function(){
            fireMsg.css('display', 'none');
        }, 2000);

        setTimeout(function(){
            gameOverMsg.css('display','');
        }, 3000);

        gameOverMsg.one('click', function(){
            location.reload();
        });
    };

    this.fire = function () {

        var gunManTimer = 6000 + gunManTime*1000;

        var timer1 = setTimeout(function(){
            clearTimeout(timer2);
            audio.attr('src', 'audio/shot.m4a');
            __self.lose();
        }, gunManTimer);

        var timer2 = setTimeout(function(){
            game.append(fireMsg);
            audio.attr('src', 'audio/fire.m4a');
            gunMan.css('background-position', '-210px 0');

            setTimeout(function(){
                gunMan.css('background-position', '-280px 0');
            }, 250);

            setTimeout(function(){
                gunMan.css('background-position', '-345px 0');
            }, 250);

            timerIdStart = new Date();

            gunMan.one('click', function(){
                var timerIdEnd = new Date();
                var whatIsTime = (timerIdEnd - timerIdStart) / 1000;

                clearTimeout(timer1);

                audio.attr('src', 'audio/shot.m4a');
                yoursSpeed.html(whatIsTime.toFixed(3));

                if (whatIsTime > gunManTime) {
                    __self.lose();
                    return;
                }
                __self.win();
            });
        }, 6000);
        $('.speed__counters_gunman').html(' ' +Math.floor(gunManTime*100)/100);
    };
});