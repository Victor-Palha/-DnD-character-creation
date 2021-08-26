function choiceaAntecedent(){
    var sectionMain = document.getElementById('sectionMain');
    let antecedent = document.createElement('div');
    antecedent.setAttribute('class', 'antecedents');
    sectionMain.appendChild(antecedent);
    antecedent.innerHTML = `<div class="antecedent">
    <h1>ANTECEDENTES</h1>
    <p class="info-antecedent">Toda história tem um início. Os antecedentes de seus
        personagens revela de onde eles vieram, como se
        tornaram aventureiros e seu lugar no mundo. Seu
        guerreiro pode ter sido um corajoso cavaleiro ou um
        soldado veterano. Seu mago talvez tenha sido um sábio ou
        um artista. Seu ladino talvez tenha participado de uma
        guilda de ladrões ou entreteve o público como um bufão. <br>
        Escolher um antecedente fornece a você importantes
        pistas sobre a identidade de seu personagem. A questão
        mais importante a ser respondida pelo seu antecedente é
        o que mudou? Por que você parou de fazer algo do seu
        antecedente e começou a se aventurar? Aonde você
        conseguiu recursos para comprar seu equipamento inicial,
        ou, caso você possua um antecedente que indique riqueza,
        porque você não tem mais os recursos? Como você
        aprendeu as perícias que compõem sua classe? O que o
        separa das pessoas ordinárias que compartilham do seu
        mesmo antecedente?</p>
        <div class="fAntece">
            <form id="fAntecedent">
                <div class="choiceAnte" id="a0">
                    <label for="acolito">ACÓLITO</label>
                    <input type="radio" name="choice" id="acolito" checked><p class="moreInfo" onclick="acolitoOpen()">+</p>
                </div>
                <div class="info" id="acolitoInfo">
                    <h3>ACÓLITO</h3> <p style="cursor: pointer;" onclick="acolitoClose()">X</p>
                    <p>Você viveu a serviço de um templo de algum deus
                        especifico ou de um panteão de deuses. Você age como um
                        intermediário entre o reino divino e o reino dos mortais,
                        realizando rituais e ofertando sacrifícios para conduzir
                        cada vez mais pessoas a adorarem a divindade. Você não
                        é necessariamente um clérigo – realizar ritos sagrados
                        não é a mesma coisa que canalizar poder divino. <br>
                        Escolha um deus, um panteão de deuses ou outro ser
                        quase divino entre aqueles descritos no apêndice B ou
                        outro especificado pelo seu Mestre para detalhar a
                        natureza do seu serviço religioso. Você foi um serviçal
                        menor no templo, criado desde a infância para auxiliar os
                        sacerdotes em ritos sagrados? Ou você foi um alto
                        sacerdote que repentinamente sentiu o chamado para
                        servir seu deus de uma maneira diferente? Talvez você foi
                        o líder de um pequeno culto não associado a templo
                        algum, ou mesmo uma seita secreta que servia a uma
                        entidade demoníaca que agora você nega.
                        </p>
                        <p>
                            <strong>Proficiência em Perícias:</strong> Intuição, Religião <br>
                            <strong>Idiomas:</strong> Dois à sua escolha <br>
                            <strong>Equipamento:</strong> Um símbolo sagrado (um presente dado
                            quando você entrou no templo), um livro de preces ou
                            uma conta de orações, 5 varetas de incenso,
                            vestimentas, um conjunto de roupas comuns e uma
                            algibeira contendo 15 po

                        </p>
                </div>
                <div class="choiceAnte" id="a1">
                    <label for="artesao">ARTESÃO DE GUILDA</label>
                    <input type="radio" name="choice" id="artesao"><p style="cursor: pointer;" onclick="artesaoOpen()">+</p>
                </div>
                <div class="info" id="artesaoInfo">
                    <h3>ARTESÃO DE GUILDA</h3> <p style="cursor: pointer;" onclick="artesaoClose()">X</p>
                    <p>Você é membro de uma guilda de artesãos, perito em um
                        campo especifico e intimamente associado a outros
                        artesãos. Você é uma parte bem estabelecida do mundo
                        mercantil, livre, graças aos seus talentos e riqueza, das
                        restrições de uma ordem social feudal. Você aprendeu
                        suas perícias como aprendiz de um mestre artesão, com o
                        patrocínio da sua guilda, até se tornar um mestre por
                        seus próprios méritos.</p>
                    <p><strong>Proficiência em Perícias:</strong> Intuição, Persuasão <br>
                        <strong>Proficiência em Ferramentas:</strong>  Um tipo de ferramenta
                        de artesão <br>
                        <strong>Idiomas:</strong>  Uma, à sua escolha <br>
                        <strong>Equipamento:</strong>  Um conjunto de ferramentas de artesão
                        (à sua escolha), uma carta de apresentação da sua
                        guilda, um conjunto de roupas de viajante e uma
                        algibeira com 15 po
                        </p>
                </div>
                <div class="choiceAnte" id="a2">
                    <label for="artista">ARTISTA</label>
                    <input type="radio" name="choice" id="artista"><p style="cursor: pointer;" onclick="artistaOpen()">+</p>
                </div>
                <div class="info" id="artistaInfo">
                    <h3>ARTISTA</h3> <p style="cursor: pointer;" onclick="artistaClose()">X</p>
                    <p>Você cresce em frente a uma audiência. Você sabe como
                        fasciná-los, entretê-los e, até mesmo, inspirá-los. Suas
                        poesias podem avivar o coração daqueles que te ouvem,
                        despertando tristeza ou alegria, risadas ou ira. Sua
                        música ergue seus espíritos ou captura suas aflições. Seus
                        passos de dança cativam, seu humor os extasia
                        rapidamente. Qualquer que sejam as técnicas que você
                        use, sua arte é sua vida.</p>
                        <p><strong>Proficiência em Perícias:</strong> Acrobacia, Atuação <br>
                            <strong>Proficiência em Ferramentas:</strong> Kit de disfarce, um tipo
                            de instrumento musical <br>
                            <strong>Equipamento:</strong> Um instrumento musical (à sua escolha),
                            um presente de um admirador (carta de amor, mecha
                            de cabelo ou uma bijuteria), um traje e uma algibeira
                            contendo 15 po
                            </p>
                </div>
                <div class="choiceAnte" id="a3">
                    <label for="charlatao">CHARLATÃO</label>
                    <input type="radio" name="choice" id="charlatao"><p style="cursor: pointer;" onclick="charlataoOpen()">+</p>
                </div>
                <div class="info" id="charlataoInfo">
                    <h3>CHARLATÃO</h3><p style="cursor: pointer;" onclick="charlataoClose()">X</p>
                    <p>Você sempre teve jeito com as pessoas. Você sabe o que os
                        deixa extasiados, você pode destrinchar os desejos em
                        seus corações após alguns minutos de conversa e, com
                        algumas perguntas capciosas, você pode lê-los como se
                        eles fossem livros infantis. É um talento útil e que você
                        está perfeitamente disposto a usar em sua vantagem. <br>
                        Você sabe o que as pessoas querem e você as entrega
                        ou, pelo menos, promete que irá entregar. O bom senso
                        deveria manter as pessoas longe de coisas que parecem
                        muito boas pra serem verdade, mas o bom senso parece
                        desaparecer quando você está por perto. A garrafa de
                        liquido cor de rosa irá, sem dúvida, curar essa brotoeja
                        horrenda, essa pomada – nada mais é que um pouco de
                        banha com uma pitada de sal de prata – pode restaurar a
                        juventude e vigor e existe uma ponte na cidade que
                        acabar de ficar a venda. Essas maravilhas soam
                        improváveis, mas você as faz soar como barganhas reais</p>
                        <p><strong>Proficiência em Perícias:</strong> Enganação, Prestidigitação <br>
                           <strong>Proficiência em Ferramentas:</strong> Kit de disfarce, kit de
                            falsificação <br>
                            <strong>Equipamento:</strong> Um conjunto de roupas finas, um kit de
                            disfarce, ferramentas de trapaça, à sua escolha (dez
                            garrafas tampadas preenchidas com líquidos coloridos,
                            um conjunto de dados viciados, um baralho de cartas
                            marcadas ou um anel de sinete de um duque
                            imaginário), e uma algibeira contendo 15po</p>
                </div>
                <div class="choiceAnte" id="a4">
                    <label for="criminoso">CRIMINOSO</label>
                    <input type="radio" name="choice" id="criminoso"><p style="cursor: pointer;" onclick="criminosoOpen()">+</p>
                </div>
                <div class="info" id="criminosoInfo">
                    <h3>CRIMINOSO</h3><p style="cursor: pointer;" onclick="criminosoClose()">X</p>
                    <p>Você é um criminoso experiente com um histórico de
                        contravenções. Você gastou um bom tempo entre outros
                        criminosos e ainda mantém contato com eles e com o
                        submundo do crime. Você está mais perto do que a
                        maioria do submundo do assassinato, roubo e violência
                        que prevalece no ventre da sociedade, e você sobreviveu
                        até esse ponto desprezando a lei e os regulamentos da
                        sociedade.</p>
                        <p><strong>Proficiência em Perícias:</strong> Enganação, Furtividade <br>
                            <strong>Proficiência em Ferramentas:</strong> Um tipo de kit de jogo,
                            ferramentas de ladrão <br>
                            <strong>Equipamento:</strong> Um pé de cabra, um conjunto de roupas
                            escuras comuns com capuz e uma algibeira contendo
                            15 po</p>
                </div>
                <div class="choiceAnte" id="a5">
                    <label for="eremita">EREMITA</label>
                    <input type="radio" name="choice" id="eremita"><p style="cursor: pointer;" onclick="eremitaOpen()">+</p>
                </div>
                <div class="info" id="eremitaInfo">
                    <h3>EREMITA</h3><p style="cursor: pointer;" onclick="eremitaClose()">X</p>
                    <p>Você viveu em reclusão – ou em uma comunidade isolada
                        como um monastério ou completamente sozinho – por um
                        período importante da sua vida. No tempo em que passou
                        longe do clamor da sociedade, você encontrou quietude,
                        solidão e, talvez, algumas das respostas que procurava.</p>
                        <p><strong>Proficiência em Perícias:</strong> Medicina, Religião <br>
                            <strong>Proficiência em Ferramentas:</strong> Kit de herbalismo <br>
                            <STRONG>Idiomas:</STRONG> Um à sua escolha <br>
                            <strong>Equipamento:</strong> Um estojo de pergaminho cheio de notas
                            dos seus estudos e orações, um cobertor de inverno,
                            um conjunto de roupas comuns, um kit de herbalismo
                            e 5 po.</p>
                </div>
                <div class="choiceAnte" id="a6">
                    <label for="forasteiro">FORASTEIRO</label>
                    <input type="radio" name="choice" id="forasteiro"><p style="cursor: pointer;" onclick="forasteiroOpen()">+</p>
                </div>
                <div class="info" id="forasteiroInfo">
                    <h3>FORASTEIRO</h3><p style="cursor: pointer;" onclick="forasteiroClose()">X</p>
                    <p>Você cresceu em uma área selvagem, longe da civilização
                        e dos confortos da cidade e tecnologia. Você testemunhou
                        a migração de manadas maiores que florestas, sobreviveu
                        à climas mais extremos que qualquer citadino poderia
                        compreender e é adepto da solidão de ser a única criatura
                        pensante em quilômetros, em qualquer direção. O
                        isolamento está no seu sangue, quer você seja um
                        nômade, um explorador, um recluso, um forrageador ou
                        mesmo um saqueador. Mesmo em lugares que você não
                        conheça as características especificas do terreno, você
                        vai conseguir se virar.</p>
                        <p><strong>Proficiência em Perícias:</strong> Atletismo, Sobrevivência<br>
                            <strong>Proficiência em Ferramentas:</strong> Um tipo de
                            instrumento musical<br>
                            <STRONG>Idiomas:</STRONG> Um à sua escolha <br>
                            <strong>Equipamento:</strong> Um bordão, uma armadilha de caça, um
                            fetiche de um animal que você matou, um conjunto de
                            roupas de viajante e uma algibeira contendo 10 po</p>
                </div>
                <div class="choiceAnte" id="a7">
                    <label for="heroi">HERÓI DO POVO</label>
                    <input type="radio" name="choice" id="heroi"><p style="cursor: pointer;" onclick="heroiOpen()">+</p>
                </div>
                <div class="info" id="heroiInfo">
                    <h3>HERÓI DO POVO</h3><p style="cursor: pointer;" onclick="heroiClose()">X</p>
                    <p>Você veio de uma parcela humilde da sociedade, mas está
                        destinado a muito mais. O povo de sua vila já o reconhece
                        como campeão, e seu destino o conduz a batalhas contra
                        tiranos e monstros que ameaçam o povo aonde quer que
                        você vá.</p>
                        <p><strong>Proficiência em Perícias:</strong> Adestrar Animais,
                            Sobrevivência<br>
                            <strong>Proficiência em Ferramentas:</strong> Um tipo de ferramenta
                            de artesão, veículos (terrestre)<br>
                            <strong>Equipamento:</strong> Um conjunto de ferramentas de artesão
                            (à sua escolha), uma pá, um pote de ferro, um conjunto
                            de roupas comuns e uma algibeira contendo 10 po</p>
                </div>
                <div class="choiceAnte" id="a8">
                    <label for="marinheiro">MARINHEIRO</label>
                    <input type="radio" name="choice" id="marinheiro"><p style="cursor: pointer;" onclick="marinheiroOpen()">+</p>
                </div>
                <div class="info" id="marinheiroInfo">
                    <h3>MARINHEIRO</h3><p style="cursor: pointer;" onclick="marinheiroClose()">X</p>
                    <p>Você navegou em um navio pelo mar por anos. Nesse
                        período, você enfrentou poderosas tormentas, monstros
                        das profundezas e aqueles que queriam afundar o seu
                        ganha-pão para as profundezas insondáveis. Seu primeiro
                        amor é a distante linha do horizonte, mas chegou a hora
                        de você por suas mãos em algo novo.
                        Converse sobre a natureza do navio que você navegou
                        anteriormente com seu Mestre. Era um navio mercante,
                        uma embarcação naval, um navio de exploração ou um
                        navio pirata? O quão famoso (ou infame) ele é? Ele era
                        muito viajado? Ele continua navegando, ou está
                        desaparecido e, provavelmente, perdido com seus
                        tripulantes?
                        Quais eram seus deveres a bordo – contramestre,
                        capitão, navegador, cozinheiro ou outra posição? Quem
                        eram o capitão e primeiro marinheiro? Você deixou o
                        navio de bem com seus companheiros ou fugiu?</p>
                        <p><strong>Proficiência em Perícias:</strong> Atletismo, Percepção<br>
                            <strong>Proficiência em Ferramentas:</strong> Ferramentas de
                            navegador, veículo (aquático)<br>
                            <strong>Equipamento:</strong> Uma malagueta (clava), 15 metros de
                            corda de seda, uma amuleto da sorte como um pé de
                            coelho ou uma pequena pedra com um furo no centro
                            (ou você pode rolar uma bugiganga da tabela
                            Bugigangas no capítulo 5), um conjunto de trajes
                            comuns e uma algibeira contendo 10 po
                        </p>
                </div>
                <div class="choiceAnte" id="a9">
                    <label for="nobre">NOBRE</label>
                    <input type="radio" name="choice" id="nobre"><p style="cursor: pointer;" onclick="nobreOpen()">+</p>
                </div>
                <div class="info" id="nobreInfo">
                    <h3>NOBRE</h3><p style="cursor: pointer;" onclick="nobreClose()">X</p>
                    <p>Você entende de riqueza, poder e privilégios. Você carrega
                        um título de nobreza, sua família possui terras, coleta
                        impostos e exerce uma influência política significativa.
                        Você pode ser um aristocrata mimado pouco familiarizado
                        com o trabalho ou com o desconforto, um ex-comerciante
                        elevado à nobreza ou um malandro deserdado com um
                        sentido desproporcional de direitos. Ou pode ser um dono
                        de terra honesto e trabalhador que se preocupa com as
                        pessoas que vivem e trabalham em sua terra, sutilmente
                        ciente da sua responsabilidade para com eles. <br>
                        Converse com seu Mestre para chegar a um título
                        adequado e determinar a quantidade de autoridade esse
                        título carrega. Um título de nobreza não fica com você – é
                        conectado a uma família inteira, e qualquer título que
                        você possuir passará para seus filhos. Você não precisa
                        determinar seu título de nobreza sozinho, você também
                        deve conversar com seu Mestre para descrever sua
                        família e a influência dela sobre você. <br>
                        Sua família é antiga e estabelecida ou só recentemente
                        você foi agraciado com seu título? Qual a influência que
                        sua família exerce e sobre qual área? Que tipo de
                        reputação sua família tem entre os outros aristocratas da
                        região? Como as pessoas comuns consideram sua família? <br>
                        Qual é sua posição na família? Um herdeiro ou chefe
                        da família? Você já herdou o título? Como você se sente
                        sobre essa responsabilidade? Você está tão abaixo da
                        linha de herança que ninguém se importa com o que você
                        faz, contanto que não envergonhe a família? Como é que o
                        chefe da família se sente sobre a sua carreira de
                        aventuras? Você está de bem com a família ou anda
                        afastado dela? <br>
                        Sua família tem um brasão de armas? Uma insígnia
                        que você pode usar em um anel de sinete? Cores
                        específicas que você usa o tempo todo? Um animal que
                        você considera como um símbolo de sua linhagem ou um
                        membro espiritual da família? <br>
                        Esses detalhes ajudam a estabelecer sua família e seu
                        título como características do mundo de campanha.</p>
                        <p><strong>Proficiência em Perícias:</strong> História, Persuasão<br>
                            <strong>Proficiência em Ferramentas:</strong> Um tipo de kit de jogos<br>
                            <STRONG>Idiomas:</STRONG> Um à sua escolha <br>
                            <strong>Equipamento:</strong> Um conjunto de trajes finos, um anel de
                            sinete, um pergaminho de linhagem e uma algibeira
                            contendo 25 po</p>
                </div>
                <div class="choiceAnte" id="a10">
                    <label for="orfao">ÓRFÃO</label>
                    <input type="radio" name="choice" id="orfao"><p style="cursor: pointer;" onclick="orfaoOpen()">+</p>
                </div>
                <div class="info" id="orfaoInfo">
                    <h3>ÓRFÃO</h3><p style="cursor: pointer;" onclick="orfaoClose()">X</p>
                    <p>Você cresceu nas ruas, sozinho, órfão e pobre. Você não
                        tinha ninguém para cuidar de você ou te alimentar,
                        então, aprendeu a se virar sozinho. Você lutou ferozmente
                        por comida e se manteve constantemente atendo a outras
                        almas desesperadas que pudessem te roubar. Você
                        dormiu em telhados e becos, exposto aos elementos e
                        suportou doenças sem ajuda da medicina ou um lugar
                        para se recuperar. Você sobreviveu a despeito de tudo e,
                        conseguiu isso através de astucia, força, agilidade ou uma
                        combinação de cada. <br>
                        Você começa sua carreira de aventureiro com dinheiro
                        o suficiente para viver modestamente, mas em segurança,
                        por pelo menos dez dias. Como você conseguiu esse
                        dinheiro? O que aconteceu para que você conseguisse se
                        libertar das circunstancias desesperadoras e embarcasse
                        em uma vida melhor? </p>
                        <p><strong>Proficiência em Perícias:</strong> Furtividade, Prestidigitação<br>
                            <strong>Proficiência em Ferramentas:</strong> Kit de disfarce,
                            ferramentas de ladrão<br>
                            <strong>Equipamento:</strong> Uma faca pequena, um mapa da cidade
                            em que você cresceu, um rato de estimação, um
                            pequeno objeto para lembrar dos seus pais, um
                            conjunto de roupas comuns e uma algibeira contendo
                            10 po</p>
                </div>
                <div class="choiceAnte" id="a11">
                    <label for="sabio">SÁBIO</label>
                    <input type="radio" name="choice" id="sabio"><p style="cursor: pointer;" onclick="sabioOpen()">+</p>
                </div>
                <div class="info" id="sabioInfo">
                    <h3>SÁBIO</h3><p style="cursor: pointer;" onclick="sabioClose()">X</p>
                    <p>Você ficou anos aprendendo sobre o conhecimento do
                        multiverso. Você decorou manuscritos, estudou
                        pergaminhos e escutou os grandes especialistas nos temas
                        que o interessam. Seus esforços fizeram de você um
                        mestre no seu campo de estudo.</p>
                        <p>
                        <strong>Proficiência em Perícias:</strong> Arcanismo, História<br>
                        <STRONG>Idiomas:</STRONG> Dois à sua escolha<br>
                        <strong>Equipamento:</strong> Um vidro de tinta escura, uma pena, uma
                        faca pequena, uma carta de um falecido colega
                        perguntando a você algo que você nunca terá a chance
                        de responder, um conjunto de roupas comuns e uma
                        algibeira contendo 10 po</p>
                </div>
                <div class="choiceAnte" id="a12">
                    <label for="soldado">SOLDADO</label>
                    <input type="radio" name="choice" id="soldado"><p style="cursor: pointer;" onclick="soldadoOpen()">+</p>
                </div>
                <div class="info" id="soldadoInfo">
                    <h3>SOLDADO</h3><p style="cursor: pointer;" onclick="soldadoClose()">X</p>
                    <p>A guerra esteve na sua vida desde que você se recorda.
                        Você foi treinado desde jovem, estudou o uso das armas e
                        armaduras, aprendeu técnicas básicas de sobrevivência,
                        incluindo como permanecer vivo no campo de batalha.
                        Você pode ter feito parte de uma armada nacional, ou
                        uma companhia de mercenários, talvez até mesmo uma
                        milícia local, que cresceu proeminentemente durante uma
                        guerra recente. <br>
                        Quando você escolher esse antecedente, converse com
                        seu Mestre para determinar de qual organização militar
                        você fez parte, quão longe você progrediu na hierarquia e
                        que tipos de experiência você teve na sua carreira militar?
                        Foi um exército de guarda, uma patrulha de cidade ou a
                        milícia de uma pequena vila? Ou talvez você tenha
                        participado da defesa pessoal de um nobre, ou mercador,
                        ou de um cartel de mercenários.</p>
                        <p>
                        <strong>Proficiência em Perícias:</strong> Atletismo, Intimidação<br>
                        <STRONG>Proficiência em Ferramentas: </STRONG> Um tipo de kit de jogo, veículo (terrestre)<br>
                        <strong>Equipamento:</strong>  Uma insígnia de patente, um fetiche
                        obtido de um inimigo caído (uma adaga, lâmina
                        partida ou tira de estandarte), um conjunto de dados
                        de osso ou baralho, um conjunto de roupas comuns e
                        uma algibeira contendo 10 po</p>
                </div>  
            </form>
            <div class="submitAnte">
                <input type="button" value="Escolher Antecedente!" onclick="selectAntecedent(), languageAnte()">
            </div>
        </div>
</div>`;
}
//Acólito 0
function acolitoOpen(){
    let acolito = document.getElementById('acolitoInfo');
    acolito.style.display = 'block';
}
function acolitoClose(){
    let acolito = document.getElementById('acolitoInfo');
    acolito.style.display = 'none';
}
//Artesão 1
function artesaoOpen(){
    let artesao = document.getElementById('artesaoInfo');
    artesao.style.display = 'block';
}
function artesaoClose(){
    let artesao = document.getElementById('artesaoInfo');
    artesao.style.display = 'none';
}
//Artista 2
function artistaOpen(){
    let artista = document.getElementById('artistaInfo');
    artista.style.display = 'block';
}
function artistaClose(){
    let artista = document.getElementById('artistaInfo');
    artista.style.display = 'none';
}
//Charlatão 3
function charlataoOpen(){
    let charlatao = document.getElementById('charlataoInfo');
    charlatao.style.display = 'block';
}
function charlataoClose(){
    let charlatao = document.getElementById('charlataoInfo');
    charlatao.style.display = 'none';
}
//Criminoso 4
function criminosoOpen(){
    let charlatao = document.getElementById('criminosoInfo');
    charlatao.style.display = 'block';
}
function criminosoClose(){
    let charlatao = document.getElementById('criminosoInfo');
    charlatao.style.display = 'none';
}
//Eremita 5
function eremitaOpen(){
    let eremita = document.getElementById('eremitaInfo');
    eremita.style.display = 'block';
}
function eremitaClose(){
    let eremita = document.getElementById('eremitaInfo');
    eremita.style.display = 'none';
}
//Forasteiro 6
function forasteiroOpen(){
    let forasteiro = document.getElementById('forasteiroInfo');
    forasteiro.style.display = 'block';
}
function forasteiroClose(){
    let forasteiro = document.getElementById('forasteiroInfo');
    forasteiro.style.display = 'none';
}
//Heroi do povo 7
function heroiOpen(){
    let heroi = document.getElementById('heroiInfo');
    heroi.style.display = 'block';
}
function heroiClose(){
    let heroi = document.getElementById('heroiInfo');
    heroi.style.display = 'none';
}
//marinheiro 8
function marinheiroOpen(){
    let marinheiro = document.getElementById('marinheiroInfo');
    marinheiro.style.display = 'block';
}
function marinheiroClose(){
    let marinheiro = document.getElementById('marinheiroInfo');
    marinheiro.style.display = 'none';
}
//Nobre 9
function nobreOpen(){
    let nobre = document.getElementById('nobreInfo');
    nobre.style.display = 'block';
}
function nobreClose(){
    let nobre = document.getElementById('nobreInfo');
    nobre.style.display = 'none';
}
//Órfão 10
function orfaoOpen(){
    let orfao = document.getElementById('orfaoInfo');
    orfao.style.display = 'block';
}
function orfaoClose(){
    let orfao = document.getElementById('orfaoInfo');
    orfao.style.display = 'none';
}
//Sábio 11
function sabioOpen(){
    let sabio = document.getElementById('sabioInfo');
    sabio.style.display = 'block';
}
function sabioClose(){
    let sabio = document.getElementById('sabioInfo');
    sabio.style.display = 'none';
}
//Soldado 12
function soldadoOpen(){
    let soldado = document.getElementById('soldadoInfo');
    soldado.style.display = 'block';
}
function soldadoClose(){
    let soldado = document.getElementById('soldadoInfo');
    soldado.style.display = 'none';
}
//Escolha do antecedente
function languageAddelf(){
    var language = document.createElement('div');
    language.setAttribute('class', 'language');
    sectionMain.appendChild(language);
    language.innerHTML = `
    <h2>Idioma Adicional</h2>
    <select name="language" id="additional">
        <option value="Anao">Anão</option>
        <option value="Gigante">Gigante</option>
        <option value="Gnômico">Gnômico</option>
        <option value="Goblin">Goblin</option>
        <option value="Halfling">Halfling</option>
        <option value="Orc">Orc</option>
        <option value="Abissal">Abissal</option>
        <option value="Celestial">Celestial</option>
        <option value="Dialeto Subterrâneno">Dialeto Subterrâneo</option>
        <option value="Dracônico">Dracônico</option>
        <option value="Infernal">Infernal</option>
        <option value="Primordial">Primordial</option>
        <option value="Silvestre">Silvestre</option>
        <option value="Subcomum">Subcomum</option>
    </select> 
    `;
}
function languageAdd(){
    var language = document.createElement('div');
    language.setAttribute('class', 'language');
    sectionMain.appendChild(language);
    language.innerHTML = `
    <h2>Idioma Adicional</h2>
    <select name="language" id="additional">
        <option value="Anao">Anão</option>
        <option value="Élfico">Élfico</option>
        <option value="Gigante">Gigante</option>
        <option value="Gnômico">Gnômico</option>
        <option value="Goblin">Goblin</option>
        <option value="Halfling">Halfling</option>
        <option value="Orc">Orc</option>
        <option value="Abissal">Abissal</option>
        <option value="Celestial">Celestial</option>
        <option value="Dialeto Subterrâneno">Dialeto Subterrâneo</option>
        <option value="Dracônico">Dracônico</option>
        <option value="Infernal">Infernal</option>
        <option value="Primordial">Primordial</option>
        <option value="Silvestre">Silvestre</option>
        <option value="Subcomum">Subcomum</option>
    </select> 
    `;

}
function selectAntecedent(){
    var ante = document.getElementsByName('choice');
    for (let n = 0; n <= 12; n++) {
        if(ante[n].checked){
            n++
            if(ante[12].checked){
                break
            }
       }
       let noChoice = document.getElementById(`a${n}`);
       noChoice.style.display = 'none';
    }
    var submitAnte = document.querySelector('div.submitAnte');
    submitAnte.style.display = 'none';
}

function languageAnte(){
    var ante = document.getElementsByName('choice');
    if(ante[0].checked){
        languageAdd();
        languageAdd();
    }
    if (ante[1].checked) {
        languageAdd();
    }
    if (ante[5].checked) {
        languageAdd();
    }
    if (ante[6].checked) {
        languageAdd();
    }
    if (ante[9].checked) {
        languageAdd();
    }
    if (ante[11].checked) {
        languageAdd();
        languageAdd();
    }
}