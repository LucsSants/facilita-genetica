const data = [
  {
    category: "DNA",
    questions: [
      {
        question: "Quais são as ligações que compõem o DNA, e qual a sua ordem correta?",
        options: ["citosina, adenina, guanina, timina","adenina, timina, guanina, citosina","citosina, timina, adenina, guanina","adenina, citosina, guanina, timina"],
        answer: "adenina, timina, guanina, citosina",
        tip: "É uma tag de uma letra apenas",
        explanation: "Adenina faz par com a Timina, formando o par de bases A-T, e ocorre dupla ligação entre essas bases. Do mesmo modo que a Guanina se liga à Citosina e forma o par de bases G-C, por tripla ligação. E as duas cadeias se ligam através de fracas pontes de hidrogênio entre as bases nitrogenadas dos nucleotídeos, responsáveis pela manutenção da estrutura de dupla hélice do DNA."
      },
      {
        question: " Qual a principal função do RNA?",
        options: ["produção de energia", "produção de anticorpos", "produção de gordura", "produção de proteínas"],
        answer: "produção de proteínas",
        tip: "Hyperlink Reference",
        explanation: ": A principal função do RNA é permitir que toda a informação contida no DNA possa ser copiada e transportada até as estruturas responsáveis pela elaboração de proteínas, ou seja, o RNA desempenha papel fundamental no processo de produção das proteínas."
      },
      {
        question: "Como são classificadas as bases nitrogenadas que contém no DNA?",
        options: ["pirimidinas, purinas", "fosfato, carbono", "enzima, desoxirribose", "enzima e perinas"],
        answer: "pirimidinas, purinas",
        explanation: "Adenina e guanina são classificadas como PÚRICAS, pois elas são moléculas compostas por dois anéis. Citosina e timina são classificadas como PIRIMÍDICAS, pois elas são moléculas formadas por um único anel."
      },
      {
        question: "Quais os nomes dos processos que acontece no RNA para a produção de proteínas?",
        options: ["síntese de proteínas, Calcinação", " fosfodiéster, tradução", "tradução e transcrição", "transcrição, Calcinação"],
        answer: "tradução e transcrição",
        explanation: "Os nomes dos processos que são realizados para a produção de proteínas são RNAmn que é responsável por conter todas as informações necessárias para que determinada proteína seja sintetizada e o RNAt que é o encarregado de transportar os aminoácidos corretos que constituirão a proteína que será produzida"
      },
      {
        question: "O RNA contêm uma ligação diferente do DNA, qual o nome dessa ligação?",
        options: ["adenina", "guanina", "uracila", "timina"],
        answer: "uracila",
        explanation: "Se a citosina do DNA é desaminada formando uma uracila, esta vai especificar a incorporação de uma adenina na cadeia 'filha' durante a replicação, em vez da guanina, que teria sido especificada pela citosina. Felizmente, uma U do DNA é reconhecida com o 'erro* pelas enzimas celulares, antes que uma base incorreta seja inserida na cadeia 'filha'. Essas enzimas eliminam a U, substituindo-a por um a C."
      },
    ],
  },
  {
    category: "sintesep",
    questions: [
      {
        question: "(Univag/2020)A síntese proteica, conhecida como ____________ , tem início a partir da síntese do RNA mensageiro no ___________ , processo chamado de __________ . Em seguida, as moléculas de RNA mensageiro se associam aos ribossomos no ___________ para a finalização do processo.",
        options: ["duplicação – citoplasma – tradução – núcleo celular", "tradução – núcleo celular – transcrição – citoplasma", " transcrição – citoplasma – tradução – núcleo celular", "tradução – núcleo celular – duplicação – citoplasma", "transcrição – citoplasma – duplicação – núcleo celular"],
        answer: "tradução – núcleo celular – transcrição – citoplasma",
        explanation: "O DNA é formado por genes, que quando expressos em características físicas e visíveis correspondem ao fenótipo de uma espécie e também específicas de um indivíduos. Por meio de processos contínuos de replicação, tradução e transcrição, esses genes são responsáveis pela formação de todas as proteínas existentes no organismo animal e que formam o fenótipo. Inicia-se com a replicação, em que a fita dupla de DNA se abre por ação da enzima helicase. Posteriormente, sob ação de outra enzima, a polimerase, inicia-se a formação de uma fita de RNA mensageiro a partir da sequência de bases nitrogenadas do DNA, processo chamado de transcrição. As sequências de bases nitrogenadas codificantes são chamadas de éxons, e as não codificantes, de íntrons. Ao final da formação do RNAm, os íntrons serão descartados. Esse RNAm migra para o citoplasma celular, local em que a informação gênica presente na molécula é sintetizada em forma de proteína. Essa “leitura” de genes e formação da proteína é a parte chamada tradução. A sequência correta, portanto, ficou: A síntese proteica, conhecida como tradução, tem início a partir da síntese do RNA mensageiro no núcleo celular , processo chamado de transcrição . Em seguida, as moléculas de RNA mensageiro se associam aos ribossomos no citoplasma para a finalização do processo.",
      },
      {
        question: "(Enem 2018 – PPL) A ricina, substância tóxica extraída da mamona, liga-se ao açúcar galactose presente na membrana plasmática de muitas células do nosso corpo. Após serem endocitadas, penetram no citoplasma da célula, onde destroem os ribossomos, matando a célula em poucos minutos. SADAVA, D. et al. Vida: a ciência da biologia. Porto Alegre: Artmed, 2009 (adaptado). O uso dessa substância pode ocasionar a morte de uma pessoa ao inibir, diretamente, a síntese de:",
        options: ["RNA", "DNA", "lipídios.", "proteínas.", "carboidratos."],
        answer: "proteínas.",
        explanation: "Os ribossomos são as estruturas celulares onde ocorre o processo de tradução = síntese de proteínas."
      },
      {
        question: "(UNIFESP)Com a finalidade de bloquear certas funções celulares, um pesquisador utilizou alguns antibióticos em uma cultura de células de camundongo. Entre os antibióticos usados, a tetraciclina atua diretamente na síntese de proteína, a mitomicinainibe a ação das polimerases do DNA e a estreptomicina introduz erros na leitura dos códons do RNA mensageiro. Esses antibióticos atuam, respectivamente, no:",
        options: ["ribossomo, ribossomo, núcleo.", "ribossomo, núcleo, ribossomo.", "núcleo, ribossomo, ribossomo.", "ribossomo, núcleo, núcleo.", "núcleo, núcleo, ribossomo."],
        answer: "ribossomo, núcleo, ribossomo.",
        explanation:"A estreptomicina atua no ribossomo (local de ocorrência da síntese de proteínas); a mitomicina atua no núcleo (onde agem as polimerases do DNA, durante o processo de replicação) e a estreptomicina atua no ribossomo, onde ocorre a “leitura” do RNA mensageiro."
      },
      {
        question: "(UVV/2020) A síntese de proteínas é controlada pelo DNA, presente no núcleo das células, e ocorre no citoplasma. Consiste em um processo complexo, composto por três etapas (transcrição, ativação e tradução), as quais contam com a participação de moléculas de RNA e ribossomos, além dos próprios aminoácidos. Durante a síntese de proteínas, a transferência de informação do DNA e a determinação da sequência de aminoácidos, que comporá determinada proteína, é uma atribuição do",
        options: ["anticódon.", "ribossomo", "RNA mensageiro", "RNA ribossômico.", "RNA transportador."],
        answer: "RNA mensageiro",
        explanation:"A molécula de RNA mensageiro contém a informação genética que será traduzida nos ribossomos. É a sequência de bases nitrogenadas do RNA mensageiro quem determina a sequência de aminoácidos na cadeia polipeptídica formada."
      },
      {
        question: "O processo de síntese de proteínas é denominado de tradução e se baseia na união de aminoácidos a fim de se formar uma proteína. Qual tipo de RNA está envolvido no processo?",
        options: ["Apenas RNA mensageiro e RNA transportador.", "Apenas RNA mensageiro e RNA ribossômico.", "Apenas RNA transportador e RNA ribossômico.", "RNA mensageiro, transportador e ribossômico.", "Nenhum tipo de RNA, pois a síntese de proteína ocorre graças a moléculas de DNA."],
        answer: "RNA mensageiro, transportador e ribossômico.",
        explanation:"Os três tipos de RNA estão envolvidos na síntese de proteínas. O RNA ribossômico participa da formação dos ribossomos, o RNA mensageiro possui a sequência de bases que guiam a síntese e o RNA transportador carrega os aminoácidos que serão usados na formação de uma nova proteína."
      },
      {
        question: "(PUC-RS-2001) Na síntese proteica, observam-se os seguintes eventos: I. o gene (segmento de DNA) é transcrito em RNA mensageiro; II. o RNA mensageiro combina-se com um complexo de ribossomo, RNAstransportadores e aminoácidos; III. a proteína é sintetizada. Num experimento de laboratório hipotético, realizou-se uma síntese proteica utilizando-se: DNA de um gene humano, RNAs transportadores de ovelha e aminoácidos de coelho. Ao final do experimento, obteve-se uma proteína:",
        options: ["humana.", "de ovelha.", " de coelho.", "quimérica de homem e ovelha.", "híbrida de homem e coelho"],
        answer: "humana.",
        explanation:"Uma proteína humana foi sintetizada, pois o DNA utilizado na transcrição de um RNA mensageiro foi DNA humano."
      },
    ],
  },
  {
    category: "cromo",
    questions: [
      {
        question: "(PUC-SP) Na aula de Biologia, o professor fez a seguinte afirmação: “A produção de ribossomos depende, indiretamente, da atividade dos cromossomos”. Em seguida, pediu a seus alunos que analisassem a afirmação e a explicassem. Foram obtidas cinco explicações diferentes, que se encontram a seguir citadas. Assinale a única afirmação correta:",
        options: [
          "Os cromossomos são constituídos, essencialmente, por RNA ribossômico e proteínas, materiais utilizados na produção de ribossomos.",
          "Os cromossomos são constituídos, essencialmente, por RNA mensageiro e proteínas, materiais utilizados na produção de ribossomos.",
          "Os cromossomos contêm DNA; este controla a síntese de ribonucleoproteínasque formarão o nucléolo e que, posteriormente, farão parte dos ribossomos.",
          "Os cromossomos são constituídos, essencialmente, por RNA transportador eproteínas, materiais utilizados na produção de ribossomos.",
          "Os cromossomos, produzidos a partir do nucléolo, fornecem material para a organização dos ribossomos.",
        ],
        answer: "Os cromossomos contêm DNA; este controla a síntese de ribonucleoproteínasque formarão o nucléolo e que, posteriormente, farão parte dos ribossomos.",
        explanation:"Os cromossomos contêm DNA; este controla a síntese de ribonucleoproteínas que formarão o nucléolo e que, posteriormente, farão parte dos ribossomos.",
      },
      {
        question: "(UCPel) Podemos dizer que cromossomo é um filamento de cromatina espiralado, visível ao microscópio óptico por ocasião da divisão celular. O conjunto de dados sobre tamanho, forma, número e características dos cromossomos de uma espécie é chamado de:",
        options: [
          "Cariótipo.", 
          "Cromonema.", 
          "Código genético.", 
          "Centrômero.",
          "Cromátide."
      ],
        answer: "Cariótipo.",
        explanation:"Denominamos de cariótipo o conjunto de cromossomos de uma espécie.",
      },
      {
        question: "(UFLA) Na espécie humana, o numero diploide de cromossomos é 46. Quantos cromossomos serão encontrados, respectivamente, nos espermatozoides, óvulos e células epidérmicas?",
        options: [
          "23,23,46", 
          "22,22,46", 
          "22,22,44", 
          "23,23,44"
      ],
        answer: "23,23,46",
        explanation:"Como os gametas são haploides, os espermatozoides e óvulos apresentam apenas 23 cromossomos. Já as células epidérmicas são somáticas e, consequentemente, diploides, com 46 cromossomos.",
      },
      {
        question: "(USJ-SC) As estruturas grossas e bem individualizadas, visíveis no núcleo durante o período de divisão celular, são denominadas de:",
        options: [
          "cariótipos.", 
          "cromossomos.", 
          "nucléolos.", 
          "cromatina."
      ],
        answer: "cromossomos.",
        explanation:"Os cromossomos são uma sequência de DNA, que contém os genes além de outras informações, estando ele no início da divisão celular, momento no qual está condensando e assim mais grosso.",
      },
      {
        question: "(UFSM) Associe as colunas - COLUNA 1 : 1- genoma 2- gene 3- cromossomo 4- cariótipo - COLUNA 2:( ) segmento de DNA que contém instrução para a formação de uma proteína. ( ) estrutura formada por uma única molécula de DNA, muito longa, associada a proteínas, visível durante a divisão celular. ( ) conjunto de genes de uma espécie.",
        options: [
          "1 – 2 – 3.", 
          "2 – 3 – 1.", 
          "2 – 4 – 1.", 
          "3 – 2 – 4.",
          "3 – 4 - 1."
      ],
        answer: "2 – 3 – 1.",
        explanation:"O material genético pode apresentar diferentes conformações, por conta disto, é dado alguns nomes para definir o estado em que a molécula de DNA se encontra, ou para se referir a alguma estrutura ou porção do código genético. O gene é uma sequência de DNA responsável por sintetizar algum tipo de proteína específica. O conjuntos de genes que formam uma espécie é conhecido como genoma. Cromossomos.Material genético condensado a partir de proteínas chamadas de histonas.",
      },
      {
        question: "(UECE) Uma célula humana que contém 22 cromossomos autossomos e um cromossomo Y é um (uma):",
        options: [
          "célula somática;", 
          "óvulo;", 
          "espermatozóide;", 
          "zigoto.",
      ],
        answer: "espermatozóide;",
        explanation:"O espermatozoides é a célula humana que contem 22 cromossomos autossomos é um cromossomo y, caracterizando-se como uma célula haploide.As células diploides são as células comuns, as células de qualquer tecido como o conjuntivo, o nervoso, hepático, entre outros. São células com 46 cromossomos cada. As células haploides são células com metade da carga genética, são os gametas sexuais, os espermatozoides e os óvulos, elas possuem apenas 23 cromossomos cada, e quando um gameta masculino encontra um feminino forma uma célula diploide, com 46 cromossomos.",
      },

    ],
  },
];

export default data;
