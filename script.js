function rebirth() {
    var count = Number($('#count').get(0).value); //환생
    var level = Number($('#level').get(0).value); //레벨
    var qust = Number($('#qust').get(0).value); //환포퀘
    var hp = Number($('#hp').get(0).value); //체력
    var attack = Number($('#attack').get(0).value); //공격
    var defense = Number($('#defense').get(0).value); //방어
    var speed = Number($('#speed').get(0).value); //순발
    var fullpoint = hp + attack + defense + speed; //전체 포인트
    var point = (fullpoint / 12) + (qust / 4) + (level - (85 * (count))) / 4;
    var counthp = Math.floor((hp / fullpoint) * (point) + 0.5);
    var countatt = Math.floor((attack / fullpoint) * (point) + 0.5);
    var countdef = Math.floor((defense / fullpoint) * (point) + 0.5);
    var countspeed = Math.floor((speed / fullpoint) * (point) + 0.5);
    alert("환생 포인트 : " + (point + (count * 10)).toFixed(0) + "\n" + "체   력 : " + counthp + "\n완   력 : " + countatt + "\n건   강 : " + countdef + "\n스피드 : " + countspeed + "\n오차가 있을 수 있습니다!\n\n1환생은 환생 퀘스트 문서를\n사용하지 않을 경우 무조건 60 포인트 입니다.");
}

function ride() {
    var status = new Array();
    var resstatus = new Array();
    status[0] = Number($('#chatt').get(0).value); //캐릭터 공격력
    status[1] = Number($('#chdef').get(0).value); //캐릭터 방어력
    status[2] = Number($('#chspd').get(0).value); //캐릭터 순발력
    var petatt = Number($('#petatt').get(0).value); //탑승펫 공격력
    var petdef = Number($('#petdef').get(0).value); //탑승펫 방어력
    var petspd = Number($('#petspd').get(0).value); //탑승펫 순발력
    resstatus[0] = Math.floor((status[0] * 80 / 100) + (petatt * 80 / 100));
    resstatus[1] = status[1] + petdef;
    resstatus[2] = Math.floor((status[2] * 20 / 100) + (petspd * 80 / 100));
    resstatus[3] = Math.floor(status[0] + (petatt * 20 / 100));
    resstatus[4] = Math.floor((status[2] * 80 / 100) + (petspd * 20 / 100));

    for (i = 0; i <= 4; i++) {
        if (resstatus[i] == resstatus[3]) {
            if (resstatus[i] > status[0]) {
                resstatus[i] = resstatus[i] + "<span class='blue'> (+" + (resstatus[i] - status[0]) + ")</span>"
            }
            if (resstatus[i] < status[0]) {
                resstatus[i] = resstatus[i] + "<span class='red'> (-" + (status[0] - resstatus[i]) + ")</span>"
            }
        }
        if (resstatus[i] == resstatus[4]) {
            if (resstatus[i] > status[2]) {
                resstatus[i] = resstatus[i] + "<span class='blue'> (+" + (resstatus[i] - status[2]) + ")</span>"
            }
            if (resstatus[i] < status[2]) {
                resstatus[i] = resstatus[i] + "<span class='red'> (-" + (status[2] - resstatus[i]) + ")</span>"
            }
        }
        if (resstatus[i] > status[i]) {
            resstatus[i] = resstatus[i] + "<span class='blue'> (+" + (resstatus[i] - status[i]) + ")</span>"
        }
        if (resstatus[i] < status[i]) {
            resstatus[i] = resstatus[i] + "<span class='red'> (-" + (status[i] - resstatus[i]) + ")</span>"
        }
    }

    $('.rideattk').html("<hr>근거리 능력치" +
        "<br>공격력 : " +
        resstatus[0] +
        "<br>방어력 : " +
        resstatus[1] +
        "<br>순발력 : " +
        resstatus[2] +
        "<hr>원거리 능력치<br>공격력 : " +
        resstatus[3] +
        "<br>방어력 : " +
        resstatus[1] +
        "<br>순발력 : " +
        resstatus[4] +
        "<hr>");
}
