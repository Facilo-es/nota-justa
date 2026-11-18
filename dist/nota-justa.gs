// Nota Justa para Google Forms · https://notajusta.facilo.es
// Pega este archivo entero en Extensiones > Apps Script (Código.gs), guarda y vuelve a abrir tu formulario.
// Solo lee el formulario donde lo instalas y la hoja de resultados que crea. Tus respuestas no salen de Google.

// Nota Justa interface text: es (final, from the spec), en, pt, fr, it.
// {x} is replaced by params.x; [x:one|many] picks by params.x === 1.
var Strings = (function () {
  'use strict';
  var T = {};

  T.es = {
    r_km: 'Grupos de fallos', r_cu: 'A medida', barBefore: 'Antes', barNow: 'Ahora', planFree: 'Gratis', planPro: 'Pro', planAcademy: 'Academia', keyInUse: 'Esta clave ya está activa en el máximo de cuentas.', notReady: 'Las licencias Pro abren muy pronto. Escríbenos a support@facilo.es y te avisamos.', 
    menuOpen: 'Abrir', menuHelp: 'Ayuda',
    title: 'Nota Justa', tagline: 'Corrige como en el examen real',
    yourForm: 'Tu formulario', isQuiz: 'Es un cuestionario',
    notQuiz: 'Este formulario no es un cuestionario. Actívalo en Configuración → Convertir en cuestionario y define las respuestas correctas.',
    recheck: 'Volver a comprobar',
    nGradable: '{g} [g:pregunta se corrige|preguntas se corrigen]',
    nNoKey: '{k} [k:pregunta|preguntas] sin respuesta correcta: {list}',
    nText: '{t} [t:pregunta|preguntas] de texto: conservan la nota de Forms',
    nGrid: '{d} [d:pregunta|preguntas] de cuadrícula (se queda con la nota de Forms)',
    gridWhy: 'Google no deja a los complementos leer ni cambiar la nota de una cuadrícula. Nota Justa la deja como la puntúa Forms y no la cuenta en la nota.',
    nothing: 'No hay preguntas que corregir.',
    checkSummary: '{g} [g:pregunta se corrige|preguntas se corrigen], {k} sin respuesta correcta, {t} de texto, {d} de cuadrícula',
    and: 'y',
    chooseRule: 'Elegir regla',
    ruleQ: '¿Cuánto resta cada fallo?',
    r_f3: 'Un tercio de pregunta', r_f3f: 'Aciertos − Fallos ÷ 3', r_f3h: 'Lo más habitual con 4 opciones.',
    r_f4: 'Un cuarto de pregunta', r_f4f: 'Aciertos − Fallos ÷ 4', r_f4h: 'Habitual con 5 opciones.',
    r_f2: 'La mitad', r_f2f: 'Aciertos − Fallos ÷ 2',
    r_opt: 'Según el número de opciones', r_optf: '1 ÷ (opciones − 1)',
    r_kmA: 'Cada', r_kmB: 'fallos restan', r_kmC: 'acierto(s)',
    r_kmf: '{k} fallos restan {m} [m:acierto|aciertos]',
    fullGroups: 'Solo grupos completos (2 fallos no restan nada)',
    fullGroupsK: 'Solo grupos completos ({r} [r:fallo no resta|fallos no restan] nada)',
    sameValueOnly: 'Solo con preguntas del mismo valor',
    r_p4: '+4 por acierto, −1 por fallo', r_p4f: '+4 / −1',
    r_cuA: 'Otra: cada fallo resta', r_cuB: 'de la pregunta', r_cuf: 'Cada fallo resta {f} de la pregunta',
    blanks: 'Las preguntas en blanco no restan.',
    scale: 'Nota sobre', scalePts: 'puntos', pass: 'Nota para aprobar', clamp: 'No bajar de 0',
    activate: 'Activar corrección', save: 'Guardar y recorregir',
    checkYourRule: 'Revisa la regla de tu convocatoria: cada examen fija la suya.',
    active: 'Corrección activada', paused: 'Corrección desactivada', ruleIs: 'Regla: {rule}',
    corrected: '{n} [n:respuesta corregida|respuestas corregidas]',
    avg: 'Media: {a} sobre {s}', avgBefore: '(antes {b})',
    negative: '{n} [n:alumno con nota negativa|alumnos con nota negativa]',
    autoNote: 'Las nuevas respuestas se corrigen solas al enviarse.',
    tip: 'Consejo: en Configuración → Cuestionario, elige "Publicar calificación: Más tarde, tras revisión manual". Así nadie ve la nota antes de corregirla.',
    openSheet: 'Abrir hoja de resultados', rescoreAll: 'Recorregir todas', changeRule: 'Cambiar regla', deactivate: 'Desactivar', reactivate: 'Activar de nuevo',
    manualNote: 'Si cambias una nota a mano en Forms, se sustituirá al recorregir.',
    revert: 'Volver a la puntuación de Forms',
    revertAsk: 'Todas las respuestas volverán a la puntuación de Forms: acierto = sus puntos, fallo = 0. ¿Seguro?',
    yes: 'Sí', no: 'No', cancel: 'Cancelar', back: 'Volver', confirm: 'Confirmar',
    pending: '{n} [n:respuesta sin corregir|respuestas sin corregir]', fixNow: 'Corregir ahora',
    progress: 'Corrigiendo {i} de {n}…', continue: 'Continuar', continuing: 'Seguimos en un minuto: Google limita cada ejecución a 6 minutos.',
    working: 'Un momento…', done: 'Hecho.',
    proTag: 'Pro',
    proTitle: 'Más con Nota Justa Pro',
    pro1: 'Nota sobre 10, 20, 100 o en puntos, tu nota de aprobado y sin bajar de 0',
    pro2: 'Todas las reglas: por número de opciones, grupos de fallos, +4/−1 y la mitad',
    pro3: 'Hoja de resultados: aciertos, fallos, en blanco, nota sobre 10, aprobado y puesto',
    pro4: 'Las preguntas que más falla tu grupo',
    proPrice: '4 € al mes o 29 € al año por profesor',
    proAcademy: 'Academias: 79 € al año, hasta 20 profesores',
    seePlans: 'Ver planes', haveKey: '¿Ya tienes una clave?', enterKey: 'Introducir clave',
    keyTitle: 'Clave de licencia', keyActivate: 'Activar',
    proUntil: 'Pro activo hasta el {date}', proForever: 'Pro activo, sin caducidad', checkedToday: 'Comprobada hoy', checkedOn: 'Comprobada el {date}',
    keyRemove: 'Desactivar en esta cuenta',
    errKey: 'Esa clave no es válida. Cópiala del correo de Freemius.',
    errExpired: 'Tu licencia ha caducado. Renueva para seguir con Pro.',
    errOffline: 'No hemos podido comprobar tu licencia. Pro sigue activo hasta el {date}.',
    errOfflineOver: 'No hemos podido comprobar tu licencia desde hace más de 30 días, así que Nota Justa funciona como versión gratuita. Vuelve a abrir esta barra con conexión.',
    errSeats: 'Esta licencia ya está en 20 cuentas. Escríbenos si necesitas más.',
    errPermission: 'Necesitas permiso de edición en este formulario.',
    errQuota: 'Google ha limitado las operaciones por hoy. Lo intentaremos de nuevo en una hora.',
    errOther: 'Algo ha fallado (código {code}). Escríbenos a support@facilo.es con ese código.',
    errTriggers: 'Google permite la corrección automática en 20 formularios por cuenta, y ya estás en 20. Desactiva Nota Justa en un formulario que ya no uses.',
    sheetName: 'Nota Justa · {title}', sheetResults: 'Resultados', sheetQuestions: 'Preguntas',
    sheetHeaders: ['Puesto', 'Alumno', 'Correo', 'Enviado', 'Aciertos', 'Fallos', 'En blanco', 'Puntos Forms', 'Penalización', 'Puntos netos', 'Nota (sobre {s})', 'Aprobado', 'ID respuesta'],
    sheetHeadersPts: 'Nota (puntos)',
    sheetSummary: ['Respuestas', 'Nota media', '% aprobados', 'Más alta', 'Más baja'],
    sheetRule: 'Regla: {rule}', sheetGrid: 'Incluye cuadrículas; la nota de Forms no.',
    sheetResponse: 'Respuesta',
    qHeaders: ['Nº', 'Pregunta', 'Puntos', '% acierto', '% fallo', '% en blanco', 'Respuesta incorrecta más elegida'],
    help: 'Ayuda y preguntas frecuentes'
  };

  T.en = {
    r_km: 'Groups of wrong answers', r_cu: 'Custom', barBefore: 'Before', barNow: 'Now', planFree: 'Free', planPro: 'Pro', planAcademy: 'Academy', keyInUse: 'This key is already active on the maximum number of accounts.', notReady: 'Pro licences open very soon. Write to support@facilo.es and we will let you know.', 
    menuOpen: 'Open', menuHelp: 'Help',
    title: 'Nota Justa', tagline: 'Mark it like the real exam',
    yourForm: 'Your form', isQuiz: 'It is a quiz',
    notQuiz: 'This form isn\'t a quiz yet. Turn it on in Settings → Make this a quiz, then set the correct answers.',
    recheck: 'Check again',
    nGradable: '{g} [g:question will be marked|questions will be marked]',
    nNoKey: '{k} [k:question has|questions have] no correct answer: {list}',
    nText: '{t} text [t:question keeps|questions keep] the Forms score',
    nGrid: '{d} grid [d:question|questions] (keeps the Forms score)',
    gridWhy: 'Google doesn\'t let add-ons read or change grid scores. Nota Justa leaves them as Forms marks them and leaves them out of the mark.',
    nothing: 'There are no questions to mark.',
    checkSummary: '{g} [g:question will be marked|questions will be marked], {k} without a correct answer, {t} text, {d} grid',
    and: 'and',
    chooseRule: 'Choose a rule',
    ruleQ: 'How much does a wrong answer cost?',
    r_f3: 'A third of the question', r_f3f: 'Right − Wrong ÷ 3', r_f3h: 'The usual one with 4 options.',
    r_f4: 'A quarter of the question', r_f4f: 'Right − Wrong ÷ 4', r_f4h: 'Usual with 5 options.',
    r_f2: 'Half', r_f2f: 'Right − Wrong ÷ 2',
    r_opt: 'By number of options', r_optf: '1 ÷ (options − 1)',
    r_kmA: 'Every', r_kmB: 'wrong cost', r_kmC: 'right',
    r_kmf: '{k} wrong cost {m} right',
    fullGroups: 'Full groups only (2 wrong cost nothing)',
    fullGroupsK: 'Full groups only ({r} wrong [r:costs|cost] nothing)',
    sameValueOnly: 'Only when every question has the same points',
    r_p4: '+4 for right, −1 for wrong', r_p4f: '+4 / −1',
    r_cuA: 'Other: each wrong answer costs', r_cuB: 'of the question', r_cuf: 'Each wrong answer costs {f} of the question',
    blanks: 'Blank answers never cost anything.',
    scale: 'Mark out of', scalePts: 'points', pass: 'Pass mark', clamp: 'Never below 0',
    activate: 'Turn on marking', save: 'Save and re-mark',
    checkYourRule: 'Check your exam\'s own rule: every exam sets its own.',
    active: 'Marking is on', paused: 'Marking is off', ruleIs: 'Rule: {rule}',
    corrected: '{n} [n:response marked|responses marked]',
    avg: 'Average: {a} out of {s}', avgBefore: '(before {b})',
    negative: '{n} [n:student|students] below zero',
    autoNote: 'New responses are marked as soon as they arrive.',
    tip: 'Tip: in Settings → Quizzes, choose "Release grades: Later, after manual review", so nobody sees a score before it\'s marked.',
    openSheet: 'Open results sheet', rescoreAll: 'Re-mark all', changeRule: 'Change rule', deactivate: 'Turn off', reactivate: 'Turn on again',
    manualNote: 'If you change a score by hand in Forms, re-marking will replace it.',
    revert: 'Go back to Forms scores',
    revertAsk: 'Every response goes back to the Forms score: right = its points, wrong = 0. Are you sure?',
    yes: 'Yes', no: 'No', cancel: 'Cancel', back: 'Back', confirm: 'Confirm',
    pending: '{n} [n:response|responses] not marked yet', fixNow: 'Mark now',
    progress: 'Marking {i} of {n}…', continue: 'Continue', continuing: 'Carrying on in a minute: Google caps each run at 6 minutes.',
    working: 'One moment…', done: 'Done.',
    proTag: 'Pro',
    proTitle: 'Do more with Nota Justa Pro',
    pro1: 'Marks out of 10, 20, 100 or in points, your own pass mark, never below 0',
    pro2: 'Every rule: by number of options, groups of wrong answers, +4/−1 and one half',
    pro3: 'Results sheet: right, wrong, blank, mark out of 10, pass and rank',
    pro4: 'The questions your class gets wrong most',
    proPrice: '€4 a month or €29 a year per teacher',
    proAcademy: 'Coaching centres: €79 a year, up to 20 teachers',
    seePlans: 'See plans', haveKey: 'Already have a key?', enterKey: 'Enter key',
    keyTitle: 'Licence key', keyActivate: 'Activate',
    proUntil: 'Pro until {date}', proForever: 'Pro, no expiry', checkedToday: 'Checked today', checkedOn: 'Checked on {date}',
    keyRemove: 'Remove from this account',
    errKey: 'That key isn\'t valid. Copy it from the Freemius email.',
    errExpired: 'Your licence has expired. Renew to keep Pro.',
    errOffline: 'We couldn\'t check your licence. Pro stays on until {date}.',
    errOfflineOver: 'We haven\'t been able to check your licence for over 30 days, so Nota Justa is working as the free version. Open this sidebar again when you\'re online.',
    errSeats: 'This licence is already on 20 accounts. Write to us if you need more.',
    errPermission: 'You need edit access to this form.',
    errQuota: 'Google has limited operations for today. We\'ll try again in an hour.',
    errOther: 'Something went wrong (code {code}). Email support@facilo.es with that code.',
    errTriggers: 'Google allows automatic marking on 20 forms per account, and you\'re at 20. Turn Nota Justa off on a form you no longer use.',
    sheetName: 'Nota Justa · {title}', sheetResults: 'Results', sheetQuestions: 'Questions',
    sheetHeaders: ['Rank', 'Student', 'Email', 'Submitted', 'Right', 'Wrong', 'Blank', 'Forms points', 'Penalty', 'Net points', 'Mark (out of {s})', 'Pass', 'Response ID'],
    sheetHeadersPts: 'Mark (points)',
    sheetSummary: ['Responses', 'Average mark', '% passing', 'Highest', 'Lowest'],
    sheetRule: 'Rule: {rule}', sheetGrid: 'Includes grid questions; the Forms score doesn\'t.',
    sheetResponse: 'Response',
    qHeaders: ['No.', 'Question', 'Points', '% right', '% wrong', '% blank', 'Most chosen wrong answer'],
    help: 'Help and FAQ'
  };

  T.pt = {
    r_km: 'Grupos de erros', r_cu: 'Personalizada', barBefore: 'Antes', barNow: 'Agora', planFree: 'Grátis', planPro: 'Pro', planAcademy: 'Academia', keyInUse: 'Esta chave já está ativa no número máximo de contas.', notReady: 'As licenças Pro abrem muito em breve. Escreva para support@facilo.es e avisamos.', 
    menuOpen: 'Abrir', menuHelp: 'Ajuda',
    title: 'Nota Justa', tagline: 'Corrija como na prova real',
    yourForm: 'Seu formulário', isQuiz: 'É um teste',
    notQuiz: 'Este formulário ainda não é um teste. Ative em Configurações → Transformar em teste e defina as respostas corretas.',
    recheck: 'Verificar de novo',
    nGradable: '{g} [g:questão será corrigida|questões serão corrigidas]',
    nNoKey: '{k} [k:questão|questões] sem resposta correta: {list}',
    nText: '{t} [t:questão|questões] de texto: mantêm a nota do Forms',
    nGrid: '{d} [d:questão|questões] de grade (fica com a nota do Forms)',
    gridWhy: 'O Google não deixa os complementos ler nem mudar a nota das questões de grade. O Nota Justa as deixa como o Forms as corrige e não as conta na nota.',
    nothing: 'Não há questões para corrigir.',
    checkSummary: '{g} [g:questão será corrigida|questões serão corrigidas], {k} sem resposta correta, {t} de texto, {d} de grade',
    and: 'e',
    chooseRule: 'Escolher regra',
    ruleQ: 'Quanto desconta cada erro?',
    r_f3: 'Um terço da questão', r_f3f: 'Acertos − Erros ÷ 3', r_f3h: 'O mais comum com 4 alternativas.',
    r_f4: 'Um quarto da questão', r_f4f: 'Acertos − Erros ÷ 4', r_f4h: 'Comum com 5 alternativas.',
    r_f2: 'Metade', r_f2f: 'Acertos − Erros ÷ 2',
    r_opt: 'Pelo número de alternativas', r_optf: '1 ÷ (alternativas − 1)',
    r_kmA: 'Cada', r_kmB: 'erros anulam', r_kmC: 'acerto(s)',
    r_kmf: '{k} erros anulam {m} [m:acerto|acertos]',
    fullGroups: 'Só grupos completos (2 erros não descontam nada)',
    fullGroupsK: 'Só grupos completos ({r} [r:erro não desconta|erros não descontam] nada)',
    sameValueOnly: 'Só com questões do mesmo valor',
    r_p4: '+4 por acerto, −1 por erro', r_p4f: '+4 / −1',
    r_cuA: 'Outra: cada erro desconta', r_cuB: 'da questão', r_cuf: 'Cada erro desconta {f} da questão',
    blanks: 'Questões em branco não descontam.',
    scale: 'Nota de 0 a', scalePts: 'pontos', pass: 'Nota para aprovação', clamp: 'Não ficar abaixo de 0',
    activate: 'Ativar correção', save: 'Salvar e corrigir de novo',
    checkYourRule: 'Confira a regra do seu edital: cada prova define a sua.',
    active: 'Correção ativada', paused: 'Correção desativada', ruleIs: 'Regra: {rule}',
    corrected: '{n} [n:resposta corrigida|respostas corrigidas]',
    avg: 'Média: {a} de {s}', avgBefore: '(antes {b})',
    negative: '{n} [n:aluno com nota negativa|alunos com nota negativa]',
    autoNote: 'As novas respostas são corrigidas assim que chegam.',
    tip: 'Dica: em Configurações → Testes, escolha "Liberar nota: Mais tarde, após revisão manual". Assim ninguém vê a nota antes da correção.',
    openSheet: 'Abrir planilha de resultados', rescoreAll: 'Corrigir todas de novo', changeRule: 'Mudar regra', deactivate: 'Desativar', reactivate: 'Ativar de novo',
    manualNote: 'Se você mudar uma nota à mão no Forms, ela será substituída na próxima correção.',
    revert: 'Voltar à pontuação do Forms',
    revertAsk: 'Todas as respostas voltam à pontuação do Forms: acerto = seus pontos, erro = 0. Tem certeza?',
    yes: 'Sim', no: 'Não', cancel: 'Cancelar', back: 'Voltar', confirm: 'Confirmar',
    pending: '{n} [n:resposta sem corrigir|respostas sem corrigir]', fixNow: 'Corrigir agora',
    progress: 'Corrigindo {i} de {n}…', continue: 'Continuar', continuing: 'Seguimos em um minuto: o Google limita cada execução a 6 minutos.',
    working: 'Um momento…', done: 'Pronto.',
    proTag: 'Pro',
    proTitle: 'Mais com o Nota Justa Pro',
    pro1: 'Nota de 0 a 10, 20, 100 ou em pontos, sua nota de aprovação e nunca abaixo de 0',
    pro2: 'Todas as regras: por número de alternativas, grupos de erros, +4/−1 e metade',
    pro3: 'Planilha de resultados: acertos, erros, em branco, nota de 0 a 10, aprovação e classificação',
    pro4: 'As questões que a turma mais erra',
    proPrice: '4 € por mês ou 29 € por ano por professor',
    proAcademy: 'Cursinhos: 79 € por ano, até 20 professores',
    seePlans: 'Ver planos', haveKey: 'Já tem uma chave?', enterKey: 'Inserir chave',
    keyTitle: 'Chave de licença', keyActivate: 'Ativar',
    proUntil: 'Pro ativo até {date}', proForever: 'Pro ativo, sem vencimento', checkedToday: 'Verificada hoje', checkedOn: 'Verificada em {date}',
    keyRemove: 'Desativar nesta conta',
    errKey: 'Essa chave não é válida. Copie-a do e-mail da Freemius.',
    errExpired: 'Sua licença venceu. Renove para continuar com o Pro.',
    errOffline: 'Não conseguimos verificar sua licença. O Pro continua ativo até {date}.',
    errOfflineOver: 'Não conseguimos verificar sua licença há mais de 30 dias, então o Nota Justa funciona como versão gratuita. Abra esta barra de novo com conexão.',
    errSeats: 'Esta licença já está em 20 contas. Escreva para nós se precisar de mais.',
    errPermission: 'Você precisa de permissão de edição neste formulário.',
    errQuota: 'O Google limitou as operações por hoje. Tentaremos de novo em uma hora.',
    errOther: 'Algo deu errado (código {code}). Escreva para support@facilo.es com esse código.',
    errTriggers: 'O Google permite correção automática em 20 formulários por conta, e você já está em 20. Desative o Nota Justa em um formulário que não usa mais.',
    sheetName: 'Nota Justa · {title}', sheetResults: 'Resultados', sheetQuestions: 'Questões',
    sheetHeaders: ['Posição', 'Aluno', 'E-mail', 'Enviado', 'Acertos', 'Erros', 'Em branco', 'Pontos Forms', 'Desconto', 'Pontos líquidos', 'Nota (de 0 a {s})', 'Aprovado', 'ID da resposta'],
    sheetHeadersPts: 'Nota (pontos)',
    sheetSummary: ['Respostas', 'Nota média', '% aprovados', 'Maior', 'Menor'],
    sheetRule: 'Regra: {rule}', sheetGrid: 'Inclui questões de grade; a nota do Forms não.',
    sheetResponse: 'Resposta',
    qHeaders: ['Nº', 'Questão', 'Pontos', '% acerto', '% erro', '% em branco', 'Resposta errada mais escolhida'],
    help: 'Ajuda e perguntas frequentes'
  };

  T.fr = {
    r_km: 'Groupes d’erreurs', r_cu: 'Sur mesure', barBefore: 'Avant', barNow: 'Maintenant', planFree: 'Gratuit', planPro: 'Pro', planAcademy: 'Établissement', keyInUse: 'Cette clé est déjà active sur le nombre maximal de comptes.', notReady: 'Les licences Pro ouvrent très bientôt. Écrivez à support@facilo.es et nous vous préviendrons.', 
    menuOpen: 'Ouvrir', menuHelp: 'Aide',
    title: 'Nota Justa', tagline: 'Notez comme à l\'examen',
    yourForm: 'Votre formulaire', isQuiz: 'C\'est un questionnaire',
    notQuiz: 'Ce formulaire n\'est pas encore un questionnaire. Activez-le dans Paramètres → Convertir en questionnaire, puis indiquez les bonnes réponses.',
    recheck: 'Vérifier à nouveau',
    nGradable: '{g} [g:question sera notée|questions seront notées]',
    nNoKey: '{k} [k:question|questions] sans bonne réponse : {list}',
    nText: '{t} [t:question|questions] à réponse libre : gardent la note de Forms',
    nGrid: '{d} [d:question|questions] en grille (note de Forms conservée)',
    gridWhy: 'Google ne permet pas aux modules de lire ni de modifier la note des grilles. Nota Justa les laisse notées par Forms et ne les compte pas dans la note.',
    nothing: 'Aucune question à noter.',
    checkSummary: '{g} [g:question sera notée|questions seront notées], {k} sans bonne réponse, {t} à réponse libre, {d} en grille',
    and: 'et',
    chooseRule: 'Choisir la règle',
    ruleQ: 'Combien coûte une mauvaise réponse ?',
    r_f3: 'Un tiers de la question', r_f3f: 'Justes − Fausses ÷ 3', r_f3h: 'Le plus courant avec 4 choix.',
    r_f4: 'Un quart de la question', r_f4f: 'Justes − Fausses ÷ 4', r_f4h: 'Courant avec 5 choix.',
    r_f2: 'La moitié', r_f2f: 'Justes − Fausses ÷ 2',
    r_opt: 'Selon le nombre de choix', r_optf: '1 ÷ (choix − 1)',
    r_kmA: 'Toutes les', r_kmB: 'fausses annulent', r_kmC: 'juste(s)',
    r_kmf: '{k} fausses annulent {m} [m:juste|justes]',
    fullGroups: 'Groupes complets seulement (2 fausses ne coûtent rien)',
    fullGroupsK: 'Groupes complets seulement ({r} [r:fausse ne coûte|fausses ne coûtent] rien)',
    sameValueOnly: 'Seulement si toutes les questions valent pareil',
    r_p4: '+4 par bonne réponse, −1 par erreur', r_p4f: '+4 / −1',
    r_cuA: 'Autre : chaque erreur coûte', r_cuB: 'de la question', r_cuf: 'Chaque erreur coûte {f} de la question',
    blanks: 'Les questions sans réponse ne coûtent rien.',
    scale: 'Note sur', scalePts: 'points', pass: 'Note pour réussir', clamp: 'Jamais en dessous de 0',
    activate: 'Activer la notation', save: 'Enregistrer et renoter',
    checkYourRule: 'Vérifiez la règle de votre concours : chaque épreuve fixe la sienne.',
    active: 'Notation activée', paused: 'Notation désactivée', ruleIs: 'Règle : {rule}',
    corrected: '{n} [n:réponse notée|réponses notées]',
    avg: 'Moyenne : {a} sur {s}', avgBefore: '(avant {b})',
    negative: '{n} [n:élève sous zéro|élèves sous zéro]',
    autoNote: 'Les nouvelles réponses sont notées dès leur envoi.',
    tip: 'Conseil : dans Paramètres → Questionnaires, choisissez « Publier la note : Plus tard, après examen manuel ». Ainsi, personne ne voit sa note avant la correction.',
    openSheet: 'Ouvrir la feuille de résultats', rescoreAll: 'Tout renoter', changeRule: 'Changer de règle', deactivate: 'Désactiver', reactivate: 'Réactiver',
    manualNote: 'Si vous modifiez une note à la main dans Forms, elle sera remplacée au prochain renotage.',
    revert: 'Revenir aux notes de Forms',
    revertAsk: 'Toutes les réponses reviendront aux notes de Forms : juste = ses points, fausse = 0. Continuer ?',
    yes: 'Oui', no: 'Non', cancel: 'Annuler', back: 'Retour', confirm: 'Confirmer',
    pending: '{n} [n:réponse non notée|réponses non notées]', fixNow: 'Noter maintenant',
    progress: 'Notation de {i} sur {n}…', continue: 'Continuer', continuing: 'Reprise dans une minute : Google limite chaque exécution à 6 minutes.',
    working: 'Un instant…', done: 'C\'est fait.',
    proTag: 'Pro',
    proTitle: 'Plus avec Nota Justa Pro',
    pro1: 'Note sur 10, 20, 100 ou en points, votre seuil de réussite, jamais en dessous de 0',
    pro2: 'Toutes les règles : selon le nombre de choix, groupes d\'erreurs, +4/−1 et la moitié',
    pro3: 'Feuille de résultats : justes, fausses, sans réponse, note sur 20, réussite et rang',
    pro4: 'Les questions que votre groupe rate le plus',
    proPrice: '4 € par mois ou 29 € par an par enseignant',
    proAcademy: 'Écoles et prépas : 79 € par an, jusqu\'à 20 enseignants',
    seePlans: 'Voir les offres', haveKey: 'Vous avez déjà une clé ?', enterKey: 'Saisir la clé',
    keyTitle: 'Clé de licence', keyActivate: 'Activer',
    proUntil: 'Pro actif jusqu\'au {date}', proForever: 'Pro actif, sans échéance', checkedToday: 'Vérifiée aujourd\'hui', checkedOn: 'Vérifiée le {date}',
    keyRemove: 'Retirer de ce compte',
    errKey: 'Cette clé n\'est pas valide. Copiez-la depuis l\'e-mail de Freemius.',
    errExpired: 'Votre licence a expiré. Renouvelez-la pour garder Pro.',
    errOffline: 'Impossible de vérifier votre licence. Pro reste actif jusqu\'au {date}.',
    errOfflineOver: 'Impossible de vérifier votre licence depuis plus de 30 jours : Nota Justa fonctionne en version gratuite. Rouvrez ce panneau une fois connecté.',
    errSeats: 'Cette licence est déjà utilisée sur 20 comptes. Écrivez-nous s\'il vous en faut plus.',
    errPermission: 'Vous devez pouvoir modifier ce formulaire.',
    errQuota: 'Google a limité les opérations pour aujourd\'hui. Nous réessaierons dans une heure.',
    errOther: 'Un problème est survenu (code {code}). Écrivez à support@facilo.es en indiquant ce code.',
    errTriggers: 'Google autorise la notation automatique sur 20 formulaires par compte, et vous y êtes. Désactivez Nota Justa sur un formulaire que vous n\'utilisez plus.',
    sheetName: 'Nota Justa · {title}', sheetResults: 'Résultats', sheetQuestions: 'Questions',
    sheetHeaders: ['Rang', 'Élève', 'E-mail', 'Envoyé', 'Justes', 'Fausses', 'Sans réponse', 'Points Forms', 'Pénalité', 'Points nets', 'Note (sur {s})', 'Réussi', 'ID réponse'],
    sheetHeadersPts: 'Note (points)',
    sheetSummary: ['Réponses', 'Moyenne', '% de réussite', 'La plus haute', 'La plus basse'],
    sheetRule: 'Règle : {rule}', sheetGrid: 'Inclut les grilles ; la note de Forms, non.',
    sheetResponse: 'Réponse',
    qHeaders: ['N°', 'Question', 'Points', '% justes', '% fausses', '% sans réponse', 'Mauvaise réponse la plus choisie'],
    help: 'Aide et questions fréquentes'
  };

  T.it = {
    r_km: 'Gruppi di errori', r_cu: 'Personalizzata', barBefore: 'Prima', barNow: 'Ora', planFree: 'Gratis', planPro: 'Pro', planAcademy: 'Accademia', keyInUse: 'Questa chiave è già attiva sul numero massimo di account.', notReady: 'Le licenze Pro aprono molto presto. Scrivi a support@facilo.es e ti avviseremo.', 
    menuOpen: 'Apri', menuHelp: 'Aiuto',
    title: 'Nota Justa', tagline: 'Correggi come all\'esame vero',
    yourForm: 'Il tuo modulo', isQuiz: 'È un quiz',
    notQuiz: 'Questo modulo non è ancora un quiz. Attivalo in Impostazioni → Trasforma in un quiz e indica le risposte corrette.',
    recheck: 'Controlla di nuovo',
    nGradable: '{g} [g:domanda verrà corretta|domande verranno corrette]',
    nNoKey: '{k} [k:domanda|domande] senza risposta corretta: {list}',
    nText: '{t} [t:domanda|domande] a testo: mantengono il punteggio di Forms',
    nGrid: '{d} [d:domanda|domande] a griglia (resta il punteggio di Forms)',
    gridWhy: 'Google non permette ai componenti aggiuntivi di leggere né cambiare il punteggio delle griglie. Nota Justa le lascia come le valuta Forms e non le conta nel voto.',
    nothing: 'Non ci sono domande da correggere.',
    checkSummary: '{g} [g:domanda verrà corretta|domande verranno corrette], {k} senza risposta corretta, {t} a testo, {d} a griglia',
    and: 'e',
    chooseRule: 'Scegli la regola',
    ruleQ: 'Quanto toglie ogni errore?',
    r_f3: 'Un terzo di domanda', r_f3f: 'Esatte − Errate ÷ 3', r_f3h: 'La più comune con 4 opzioni.',
    r_f4: 'Un quarto di domanda', r_f4f: 'Esatte − Errate ÷ 4', r_f4h: 'Comune con 5 opzioni.',
    r_f2: 'La metà', r_f2f: 'Esatte − Errate ÷ 2',
    r_opt: 'In base al numero di opzioni', r_optf: '1 ÷ (opzioni − 1)',
    r_kmA: 'Ogni', r_kmB: 'errori tolgono', r_kmC: 'esatta/e',
    r_kmf: '{k} errori tolgono {m} [m:esatta|esatte]',
    fullGroups: 'Solo gruppi completi (2 errori non tolgono nulla)',
    fullGroupsK: 'Solo gruppi completi ({r} [r:errore non toglie|errori non tolgono] nulla)',
    sameValueOnly: 'Solo con domande dello stesso valore',
    r_p4: '+4 per risposta esatta, −1 per errore', r_p4f: '+4 / −1',
    r_cuA: 'Altra: ogni errore toglie', r_cuB: 'della domanda', r_cuf: 'Ogni errore toglie {f} della domanda',
    blanks: 'Le domande senza risposta non tolgono nulla.',
    scale: 'Voto su', scalePts: 'punti', pass: 'Voto per la sufficienza', clamp: 'Mai sotto lo 0',
    activate: 'Attiva la correzione', save: 'Salva e ricorreggi',
    checkYourRule: 'Controlla la regola del tuo concorso: ogni prova stabilisce la sua.',
    active: 'Correzione attiva', paused: 'Correzione disattivata', ruleIs: 'Regola: {rule}',
    corrected: '{n} [n:risposta valutata|risposte valutate]',
    avg: 'Media: {a} su {s}', avgBefore: '(prima {b})',
    negative: '{n} [n:studente sotto zero|studenti sotto zero]',
    autoNote: 'Le nuove risposte vengono corrette appena arrivano.',
    tip: 'Consiglio: in Impostazioni → Quiz, scegli "Rilascia punteggio: Più tardi, dopo la revisione manuale". Così nessuno vede il voto prima della correzione.',
    openSheet: 'Apri il foglio dei risultati', rescoreAll: 'Ricorreggi tutte', changeRule: 'Cambia regola', deactivate: 'Disattiva', reactivate: 'Riattiva',
    manualNote: 'Se cambi un punteggio a mano in Forms, verrà sostituito alla prossima correzione.',
    revert: 'Torna ai punteggi di Forms',
    revertAsk: 'Tutte le risposte tornano al punteggio di Forms: esatta = i suoi punti, errata = 0. Sei sicuro?',
    yes: 'Sì', no: 'No', cancel: 'Annulla', back: 'Indietro', confirm: 'Conferma',
    pending: '{n} [n:risposta da correggere|risposte da correggere]', fixNow: 'Correggi ora',
    progress: 'Correzione {i} di {n}…', continue: 'Continua', continuing: 'Riprendiamo tra un minuto: Google limita ogni esecuzione a 6 minuti.',
    working: 'Un attimo…', done: 'Fatto.',
    proTag: 'Pro',
    proTitle: 'Di più con Nota Justa Pro',
    pro1: 'Voto su 10, 20, 100 o in punti, la tua sufficienza e mai sotto lo 0',
    pro2: 'Tutte le regole: per numero di opzioni, gruppi di errori, +4/−1 e la metà',
    pro3: 'Foglio dei risultati: esatte, errate, in bianco, voto su 10, promosso e posizione',
    pro4: 'Le domande che la classe sbaglia di più',
    proPrice: '4 € al mese o 29 € all\'anno per docente',
    proAcademy: 'Scuole e accademie: 79 € all\'anno, fino a 20 docenti',
    seePlans: 'Vedi i piani', haveKey: 'Hai già una chiave?', enterKey: 'Inserisci la chiave',
    keyTitle: 'Chiave di licenza', keyActivate: 'Attiva',
    proUntil: 'Pro attivo fino al {date}', proForever: 'Pro attivo, senza scadenza', checkedToday: 'Verificata oggi', checkedOn: 'Verificata il {date}',
    keyRemove: 'Disattiva su questo account',
    errKey: 'Questa chiave non è valida. Copiala dall\'email di Freemius.',
    errExpired: 'La tua licenza è scaduta. Rinnova per continuare con Pro.',
    errOffline: 'Non siamo riusciti a verificare la licenza. Pro resta attivo fino al {date}.',
    errOfflineOver: 'Non riusciamo a verificare la licenza da oltre 30 giorni, quindi Nota Justa funziona come versione gratuita. Riapri questa barra quando sei online.',
    errSeats: 'Questa licenza è già su 20 account. Scrivici se ti servono più posti.',
    errPermission: 'Ti serve il permesso di modifica su questo modulo.',
    errQuota: 'Google ha limitato le operazioni per oggi. Riproveremo tra un\'ora.',
    errOther: 'Qualcosa è andato storto (codice {code}). Scrivi a support@facilo.es indicando questo codice.',
    errTriggers: 'Google consente la correzione automatica su 20 moduli per account e sei a 20. Disattiva Nota Justa su un modulo che non usi più.',
    sheetName: 'Nota Justa · {title}', sheetResults: 'Risultati', sheetQuestions: 'Domande',
    sheetHeaders: ['Posizione', 'Studente', 'Email', 'Inviato', 'Esatte', 'Errate', 'In bianco', 'Punti Forms', 'Penalità', 'Punti netti', 'Voto (su {s})', 'Promosso', 'ID risposta'],
    sheetHeadersPts: 'Voto (punti)',
    sheetSummary: ['Risposte', 'Voto medio', '% promossi', 'Più alto', 'Più basso'],
    sheetRule: 'Regola: {rule}', sheetGrid: 'Include le griglie; il punteggio di Forms no.',
    sheetResponse: 'Risposta',
    qHeaders: ['N.', 'Domanda', 'Punti', '% esatte', '% errate', '% in bianco', 'Risposta errata più scelta'],
    help: 'Aiuto e domande frequenti'
  };

  var LANGS = ['es', 'en', 'pt', 'fr', 'it'];

  function table(lg) { return T[lg] || T.en; }

  function fill(s, p) {
    p = p || {};
    return String(s)
      .replace(/\[(\w+):([^|\]]*)\|([^\]]*)\]/g, function (_, k, one, many) { return Number(p[k]) === 1 ? one : many; })
      .replace(/\{(\w+)\}/g, function (m, k) { return p[k] !== undefined ? p[k] : m; });
  }

  function t(lg, key, p) {
    var v = table(lg)[key];
    if (v === undefined) v = T.en[key];
    if (Array.isArray(v)) return v.map(function (x) { return fill(x, p); });
    return v === undefined ? key : fill(v, p);
  }

  return { LANGS: LANGS, table: table, t: t, fill: fill };
})();


// Nota Justa engine: pure logic, no Google calls. Runs in Apps Script and in Node (tests).
// Spec section 6. Code.gs turns Forms objects into the plain data described below.
//
// Form:     { id, title, isQuiz, items: [Item] }
// Item:     { id, n, title, type: 'MC'|'CB'|'LIST'|'TEXT'|'PARA'|'GRID'|'CBGRID'|'OTHER',
//             points, choices: [string], correct: [string], rows: number }
// Response: { id, sent: ms, email, answers: { itemId: string | [string] | [[string]] | null },
//             scores: { itemId: number } }   // Forms' own score, used for text and grid items
var Engine = (function () {
  'use strict';

  var CHOICE = { MC: 1, CB: 1, LIST: 1 };
  var RULES = ['f3', 'f4', 'f2', 'opt', 'km', 'p4', 'cu'];
  var FREE_RULES = { f3: 1, f4: 1, cu: 1 };
  var FRACTIONS = { f3: 1 / 3, f4: 1 / 4, f2: 1 / 2, p4: 1 / 4 };
  var LICENCE_RECHECK_DAYS = 7;
  var LICENCE_GRACE_DAYS = 30;
  var DAY = 86400000;
  var NAME_RE = /nombre|name|nom|nome|alumno|student|estudiante/i;

  function r2(x) { return Math.round((x + (x >= 0 ? 1e-9 : -1e-9)) * 100) / 100; }

  function defaults() {
    return { v: 1, rule: 'f3', f: 1 / 3, k: 3, m: 1, fullGroups: false, scale: 10, pass: 5,
      clampZero: false, active: false, sheetId: '', lastDone: '', formId: '' };
  }

  // ---- F1 form check ----
  function isGradable(it) {
    return !!CHOICE[it.type] && it.points > 0 && it.correct && it.correct.length > 0;
  }

  function checkForm(form) {
    var out = { isQuiz: !!form.isQuiz, gradable: [], noKey: [], text: [], grid: [], max: 0, sameValue: true, state: 'ok' };
    var firstPoints = null;
    form.items.forEach(function (it) {
      if (CHOICE[it.type]) {
        if (isGradable(it)) {
          out.gradable.push(it.n);
          if (firstPoints === null) firstPoints = it.points; else if (it.points !== firstPoints) out.sameValue = false;
        } else out.noKey.push(it.n);
      } else if (it.type === 'TEXT' || it.type === 'PARA') out.text.push(it.n);
      else if (it.type === 'GRID' || it.type === 'CBGRID') out.grid.push(it.n);
      if (it.points > 0) out.max += it.points;
    });
    if (!out.isQuiz) out.state = 'notQuiz';
    else if (!out.gradable.length) out.state = 'nothing';
    return out;
  }

  // ---- answers: right, wrong or blank, from the key and the answer, never from a score (F4) ----
  function judge(it, a) {
    if (a === null || a === undefined || a === '' || (Array.isArray(a) && a.length === 0)) return 'B';
    if (it.type === 'CB') {
      var given = (Array.isArray(a) ? a : [a]).slice().sort();
      var key = it.correct.slice().sort();
      if (given.length !== key.length) return 'W';
      for (var i = 0; i < key.length; i++) if (given[i] !== key[i]) return 'W';
      return 'R';
    }
    // MC and LIST. An "Otro" answer is any text that isn't a choice, so it is wrong unless it is the key.
    return it.correct.indexOf(String(a)) >= 0 ? 'R' : 'W';
  }

  // Penalty fraction of a question's own points for one wrong answer (not used for full groups).
  function fraction(it, cfg) {
    if (cfg.rule === 'opt') {
      var n = it.choices ? it.choices.length : 0;
      return (it.type === 'CB' || n <= 1) ? 0 : 1 / (n - 1);
    }
    if (cfg.rule === 'km') return (cfg.m || 0) / (cfg.k || 1);
    if (cfg.rule === 'cu') return Math.max(0, Number(cfg.f) || 0);
    return FRACTIONS[cfg.rule] || 0;
  }

  // Full groups need every gradable question to have the same points (T12).
  function ruleAllowed(form, cfg) {
    if (RULES.indexOf(cfg.rule) < 0) return 'unknown';
    if (cfg.rule === 'km') {
      if (!(cfg.k >= 1 && cfg.m > 0)) return 'badKm';
      if (cfg.fullGroups && !checkForm(form).sameValue) return 'notSameValue';
    }
    if (cfg.rule === 'cu' && !(Number(cfg.f) >= 0 && Number(cfg.f) <= 10)) return 'badCustom';
    return '';
  }

  // ---- scoring one response ----
  // Returns item scores for the gradable questions (what goes back to Forms), counts, and the mark.
  function scoreResponse(form, resp, cfg) {
    var items = {}, A = 0, E = 0, B = 0, before = 0, other = 0, max = 0, wrong = [], gradableIds = [], exact = 0;
    form.items.forEach(function (it) {
      if (it.points > 0) max += it.points;
      if (isGradable(it)) {
        gradableIds.push(it.id);
        var j = judge(it, resp.answers[it.id]);
        if (j === 'R') { A++; items[it.id] = it.points; before += it.points; }
        else if (j === 'B') { B++; items[it.id] = 0; }
        else { E++; items[it.id] = 0; wrong.push(it); }
      } else if (!CHOICE[it.type] && resp.scores && typeof resp.scores[it.id] === 'number') {
        other += resp.scores[it.id];   // text and grid keep Forms' score
      }
    });

    if (cfg.rule === 'km' && cfg.fullGroups) {
      wrong.forEach(function (it, j) { items[it.id] = ((j + 1) % cfg.k === 0) ? r2(-cfg.m * it.points) : 0; });
    } else {
      // Each penalty rounded to 2 decimals; the remainder goes on the last penalised question.
      var rounded = 0, last = null;
      wrong.forEach(function (it) {
        var p = -fraction(it, cfg) * it.points;
        exact += p; items[it.id] = r2(p) || 0; rounded += items[it.id];
        if (p !== 0) last = it;
      });
      if (last) items[last.id] = r2(items[last.id] + (r2(exact) - r2(rounded))) || 0;
    }

    if (cfg.rule === 'km' && cfg.fullGroups) exact = wrong.reduce(function (t, it) { return t + items[it.id]; }, 0);
    var penalty = 0, gain = 0;
    gradableIds.forEach(function (id) { if (items[id] < 0) penalty += items[id]; else gain += items[id]; });
    penalty = r2(penalty);
    var net = r2(gain + penalty + other);
    var formsScore = r2(before + other);
    return { items: items, A: A, E: E, B: B, formsScore: formsScore, penalty: penalty, net: net, max: r2(max),
      exact: { gain: gain, penalty: exact, other: other } };
  }

  // Scores Forms' own way (right = points, wrong = 0): "Volver a la puntuación de Forms".
  function formsOwnScores(form, resp) {
    var items = {};
    form.items.forEach(function (it) {
      if (isGradable(it)) items[it.id] = judge(it, resp.answers[it.id]) === 'R' ? it.points : 0;
    });
    return items;
  }

  // ---- marks ----
  // +4/−1 with every question worth 1 point shows marks as 4 per question (example 7).
  function displayFactor(form, cfg) {
    if (cfg.rule !== 'p4') return 1;
    var all1 = form.items.every(function (it) { return !isGradable(it) || it.points === 1; });
    return all1 ? 4 : 1;
  }

  function mark(net, max, cfg, factor) {
    var m;
    if (cfg.scale === 'pts') m = r2(net * (factor || 1));
    else m = max > 0 ? r2(net / max * cfg.scale) : 0;
    if (cfg.clampZero && m < 0) m = 0;
    return m;
  }

  // Standard competition rank, by mark descending: 8, 7, 7, 6 -> 1, 2, 2, 4.
  function rank(marks) {
    var order = marks.map(function (m, i) { return { m: m, i: i }; }).sort(function (a, b) { return b.m - a.m || a.i - b.i; });
    var out = new Array(marks.length);
    order.forEach(function (o, j) { out[o.i] = (j > 0 && o.m === order[j - 1].m) ? out[order[j - 1].i] : j + 1; });
    return out;
  }

  // ---- grids in the results sheet (Forms can't take grid scores; spec section 6) ----
  // Apps Script can't read a grid's key, so right rows come from Forms' own score for the grid.
  function gridRows(it, resp) {
    var rows = it.rows || 1, per = it.points / rows;
    var a = resp.answers[it.id] || [], answered = 0;
    for (var i = 0; i < rows; i++) {
      var v = a[i];
      if (v !== null && v !== undefined && v !== '' && !(Array.isArray(v) && !v.length)) answered++;
    }
    var sc = resp.scores && typeof resp.scores[it.id] === 'number' ? resp.scores[it.id] : 0;
    var right = per > 0 ? Math.min(answered, Math.round(sc / per)) : 0;
    return { rows: rows, per: per, right: right, wrong: answered - right, blank: rows - answered };
  }

  // One results-sheet line: grids counted row by row with the rule's penalty.
  function sheetScore(form, resp, cfg) {
    var s = scoreResponse(form, resp, cfg);
    // Sums stay exact and are rounded once, so the sheet's net is the exact net rounded (as in Forms).
    var A = s.A, E = s.E, B = s.B, x = s.exact, gain = x.gain, pen = x.penalty, other = x.other, hasGrid = false;
    form.items.forEach(function (it) {
      if (it.type !== 'GRID' && it.type !== 'CBGRID') return;
      if (!(it.points > 0)) return;
      hasGrid = true;
      var g = gridRows(it, resp);
      var sc = resp.scores && typeof resp.scores[it.id] === 'number' ? resp.scores[it.id] : 0;
      var f;
      if (cfg.rule === 'opt') f = (it.type === 'GRID' && it.cols > 1) ? 1 / (it.cols - 1) : 0;
      else if (cfg.rule === 'km' && cfg.fullGroups) f = 0;   // groups count Forms questions only
      else f = fraction({ type: 'MC', choices: [] }, cfg);
      A += g.right; E += g.wrong; B += g.blank;
      other += g.right * g.per - sc;
      pen += -f * g.per * g.wrong;
    });
    var formsScore = s.formsScore, penalty = r2(pen), net = r2(gain + pen + other);
    return { A: A, E: E, B: B, formsScore: formsScore, penalty: penalty, net: net, max: s.max, hasGrid: hasGrid };
  }

  // ---- whole form ----
  // Settings cfg. Returns per-response results in submission order plus a summary. Free and Pro score every response.
  function scoreAll(form, responses, cfg) {
    var factor = displayFactor(form, cfg);
    var sorted = responses.slice().sort(function (a, b) { return a.sent - b.sent; });
    var res = sorted.map(function (r) {
      var s = scoreResponse(form, r, cfg);
      s.id = r.id; s.done = true;
      s.mark = mark(s.net, s.max, cfg, factor);
      s.before = mark(s.formsScore, s.max, { scale: cfg.scale, clampZero: false }, factor);
      return s;
    });
    function avg(k) { return res.length ? r2(res.reduce(function (t, s) { return t + s[k]; }, 0) / res.length) : 0; }
    return { results: res, summary: { done: res.length, avg: avg('mark'),
      avgBefore: avg('before'), negative: res.filter(function (s) { return s.net < 0; }).length,
      factor: factor } };
  }

  // ---- results sheet (F8) ----
  var FORMULA_START = /^[=+\-@]/;
  function cell(v) {
    if (typeof v === 'string' && FORMULA_START.test(v)) return "'" + v;
    return v;
  }

  function nameItem(form) {
    for (var i = 0; i < form.items.length; i++) {
      var it = form.items[i];
      if (it.type === 'TEXT' && NAME_RE.test(it.title || '')) return it;
    }
    return null;
  }

  // Rows for "Resultados", sorted by rank. T is the strings table for the teacher's language.
  function resultRows(form, responses, cfg, T) {
    var factor = displayFactor(form, cfg);
    var ni = nameItem(form);
    var sorted = responses.slice().sort(function (a, b) { return a.sent - b.sent; });
    var lines = sorted.map(function (r, i) {
      var s = sheetScore(form, r, cfg);
      var name = (ni && r.answers[ni.id]) ? String(r.answers[ni.id]) : (r.email || T.sheetResponse + ' ' + (i + 1));
      var m = mark(s.net, s.max, cfg, factor);
      return { r: r, s: s, name: name, mark: m, pass: cfg.scale === 'pts' ? null : m >= cfg.pass };
    });
    var ranks = rank(lines.map(function (l) { return l.mark; }));
    lines.forEach(function (l, i) { l.rank = ranks[i]; });
    lines.sort(function (a, b) { return a.rank - b.rank || a.r.sent - b.r.sent; });
    var rows = lines.map(function (l) {
      return [l.rank, cell(l.name), cell(l.r.email || ''), new Date(l.r.sent), l.s.A, l.s.E, l.s.B,
        r2(l.s.formsScore * factor), r2(l.s.penalty * factor), r2(l.s.net * factor), l.mark,
        l.pass === null ? '' : (l.pass ? T.yes : T.no), cell(String(l.r.id))];
    });
    var marks = lines.map(function (l) { return l.mark; });
    var summary = {
      responses: lines.length,
      avg: marks.length ? r2(marks.reduce(function (a, b) { return a + b; }, 0) / marks.length) : 0,
      passPct: lines.length ? r2(lines.filter(function (l) { return l.pass; }).length / lines.length * 100) : 0,
      high: marks.length ? Math.max.apply(null, marks) : 0,
      low: marks.length ? Math.min.apply(null, marks) : 0,
      hasGrid: lines.some(function (l) { return l.s.hasGrid; })
    };
    return { rows: rows, summary: summary };
  }

  // Rows for "Preguntas" (F9).
  function questionRows(form, responses) {
    var n = responses.length || 1;
    return form.items.filter(isGradable).map(function (it) {
      var r = 0, w = 0, b = 0, wc = {};
      responses.forEach(function (resp) {
        var a = resp.answers[it.id], j = judge(it, a);
        if (j === 'R') r++; else if (j === 'B') b++;
        else { w++; var k = Array.isArray(a) ? a.slice().sort().join(' + ') : String(a); wc[k] = (wc[k] || 0) + 1; }
      });
      var top = '';
      Object.keys(wc).forEach(function (k) { if (!top || wc[k] > wc[top]) top = k; });
      return [it.n, cell(it.title || ''), it.points, r2(r / n * 100), r2(w / n * 100), r2(b / n * 100), cell(top)];
    });
  }

  // ---- F11 what Free includes ----
  // No response or form limit (Alfa, P0081): Free gets −1/3, −1/4 and a custom fraction, on a 0–10 scale.
  function canUseRule(rule, pro) { return !!pro || !!FREE_RULES[rule]; }

  // ---- F12 licence ----
  // lic: { key, installId, plan, expires (ms or 0 for lifetime), checked (ms), status: 'ok'|'invalid'|'expired' }
  function licenceState(lic, now) {
    if (!lic || !lic.key || !lic.installId) return { pro: false, reason: 'none', recheck: false };
    if (lic.status === 'invalid') return { pro: false, reason: 'invalid', recheck: false };
    if (lic.expires && lic.expires < now) return { pro: false, reason: 'expired', recheck: true };
    var age = now - (Number(lic.checked) || 0);
    var graceUntil = (Number(lic.checked) || 0) + LICENCE_GRACE_DAYS * DAY;
    if (age > LICENCE_GRACE_DAYS * DAY) return { pro: false, reason: 'offline', recheck: true, graceUntil: graceUntil };
    return { pro: true, reason: 'ok', recheck: age > LICENCE_RECHECK_DAYS * DAY, graceUntil: graceUntil, expires: lic.expires || 0 };
  }

  // ---- F13 language and numbers ----
  function lang(locale) {
    var l = String(locale || '').toLowerCase().slice(0, 2);
    return ({ es: 'es', pt: 'pt', fr: 'fr', it: 'it' })[l] || 'en';
  }

  function num(x, lg, d) {
    if (x === null || x === undefined || isNaN(x)) return '—';
    d = d === undefined ? 2 : d;
    var comma = lg !== 'en';
    var s = Math.abs(x).toFixed(d), parts = s.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, comma ? (lg === 'fr' ? ' ' : '.') : ',');
    return (x < -0.004 ? '−' : '') + parts.join(comma ? ',' : '.');
  }

  return { RULES: RULES, FREE_RULES: FREE_RULES, DAY: DAY,
    r2: r2, defaults: defaults, isGradable: isGradable, checkForm: checkForm, judge: judge, fraction: fraction,
    ruleAllowed: ruleAllowed, scoreResponse: scoreResponse, formsOwnScores: formsOwnScores, displayFactor: displayFactor,
    mark: mark, rank: rank, gridRows: gridRows, sheetScore: sheetScore, scoreAll: scoreAll, cell: cell, nameItem: nameItem,
    resultRows: resultRows, questionRows: questionRows, canUseRule: canUseRule,
    licenceState: licenceState, lang: lang, num: num };
})();


/**
 * Nota Justa: the thin Google layer. The maths lives in engine.js, which the Node tests cover.
 * This file reads the form, writes scores back, keeps settings and writes the results sheet.
 * Logs never hold answers, names or emails: error codes only.
 */

var SETTINGS_KEY = 'nj';
var JOB_KEY = 'njJob';
var BATCH = 50;
var CHUNK_MS = 25000;   // the sidebar calls rescoreChunk again until done, and shows progress between calls
var VERSION = '1.0.1';  // shown in the sidebar footer, so support and security reports can name it
var SITE = 'https://notajusta.facilo.es';

/** Freemius product. Filled in when the product is created, after the prototype is approved. */
var LICENCE = { productId: '44945', academyPlanId: '79235', apiBase: 'https://api.freemius.com/v1', title: 'Nota Justa' };
var CHECKOUT = SITE + '/#precios';

// ---------- Menu ----------

function onOpen(e) {
  var lg = lang_();
  FormApp.getUi().createAddonMenu()
    .addItem(Strings.t(lg, 'menuOpen'), 'showSidebar')
    .addItem(Strings.t(lg, 'menuHelp'), 'showHelp')
    .addToUi();
}

function onInstall(e) { onOpen(e); }

function showSidebar() {
  var t = HtmlService.createTemplate(HTML_FILES_['Sidebar']);
  t.boot = JSON.stringify({ lang: lang_(), T: Strings.table(lang_()), site: SITE, checkout: CHECKOUT, version: VERSION }).replace(/</g, '\\u003c');
  FormApp.getUi().showSidebar(t.evaluate().setTitle('Nota Justa'));
}

function showHelp() {
  var url = SITE + (lang_() === 'es' ? '/soporte/' : '/en/support/');
  var html = HtmlService.createHtmlOutput('<script>window.open(' + JSON.stringify(url) + ');google.script.host.close();</script>' +
    '<p style="font-family:Arial,sans-serif"><a href="' + url + '" target="_blank">' + url + '</a></p>').setWidth(320).setHeight(80);
  FormApp.getUi().showModelessDialog(html, Strings.t(lang_(), 'help'));
}

function lang_() {
  try { return Engine.lang(Session.getActiveUserLocale()); } catch (e) { return 'es'; }
}

// ---------- Errors: codes only ----------

var ERR = { permission: 'NJ-01', quota: 'NJ-02', triggers: 'NJ-03', sheet: 'NJ-04', licence: 'NJ-05', other: 'NJ-07' };

function guard_(fn) {
  try { return fn(); } catch (e) {
    var msg = String(e && e.message || e), lg = lang_(), code = ERR.other, text;
    if (/permission|not have access|no tienes permiso|access denied/i.test(msg)) { code = ERR.permission; text = Strings.t(lg, 'errPermission'); }
    else if (/too many times|quota|Service invoked too many|limit exceeded|Límite/i.test(msg)) { code = ERR.quota; text = Strings.t(lg, 'errQuota'); }
    else if (/too many triggers|demasiados activadores/i.test(msg)) { code = ERR.triggers; text = Strings.t(lg, 'errTriggers'); }
    console.error(code, e && e.name, where_(e));
    return { error: code, text: text || Strings.t(lg, 'errOther', { code: code }) };
  }
}

/** Function names and line numbers from the stack, never the message, which can quote answers. */
function where_(e) {
  return String(e && e.stack || '').split('\n').map(function (l) { var m = l.match(/at (\S+) \((\w+):(\d+)/); return m ? m[1] + ':' + m[3] : ''; }).filter(String).slice(0, 3).join(' < ');
}

// ---------- Reading the form ----------

var TYPES = {
  MULTIPLE_CHOICE: 'MC', CHECKBOX: 'CB', LIST: 'LIST', TEXT: 'TEXT', PARAGRAPH_TEXT: 'PARA',
  GRID: 'GRID', CHECKBOX_GRID: 'CBGRID'
};

/** The form as plain data for the engine, plus a map from item id to the Forms item. */
function readForm_(form) {
  var items = [], byId = {}, n = 0;
  form.getItems().forEach(function (item) {
    var type = TYPES[String(item.getType())];
    if (!type) return;
    n++;
    var d = { id: String(item.getId()), n: n, title: item.getTitle(), type: type, points: 0, choices: [], correct: [] };
    var q = null;
    if (type === 'MC') q = item.asMultipleChoiceItem();
    else if (type === 'CB') q = item.asCheckboxItem();
    else if (type === 'LIST') q = item.asListItem();
    if (q) {
      d.points = q.getPoints();
      q.getChoices().forEach(function (c) { d.choices.push(c.getValue()); if (c.isCorrectAnswer()) d.correct.push(c.getValue()); });
    } else if (type === 'TEXT') d.points = item.asTextItem().getPoints();
    else if (type === 'PARA') d.points = item.asParagraphTextItem().getPoints();
    else if (type === 'GRID') { var g = item.asGridItem(); d.rows = g.getRows().length; d.cols = g.getColumns().length; d.points = gridPoints_(g); }
    else if (type === 'CBGRID') { var cg = item.asCheckboxGridItem(); d.rows = cg.getRows().length; d.cols = cg.getColumns().length; d.points = gridPoints_(cg); }
    items.push(d);
    byId[d.id] = item;
  });
  return { data: { id: form.getId(), title: form.getTitle(), isQuiz: form.isQuiz(), items: items }, byId: byId };
}

/** Apps Script doesn't expose grid points on every account; without them the grid keeps Forms' score. */
function gridPoints_(g) {
  try { return typeof g.getPoints === 'function' ? Number(g.getPoints()) || 0 : 0; } catch (e) { return 0; }
}

/** One response as plain data: answers by item id and Forms' current score per gradable item. */
function readResponse_(r) {
  var answers = {}, scores = {};
  r.getItemResponses().forEach(function (ir) { answers[String(ir.getItem().getId())] = ir.getResponse(); });
  r.getGradableItemResponses().forEach(function (ir) {
    var id = String(ir.getItem().getId()), s = null;
    try { s = ir.getScore(); } catch (e) { /* grids: Google refuses to read their score (T1) */ }
    if (typeof s === 'number') scores[id] = s;
    if (!(id in answers)) answers[id] = ir.getResponse();
  });
  var email = '';
  try { email = r.getRespondentEmail() || ''; } catch (e) { /* not collected */ }
  return { id: r.getId(), sent: r.getTimestamp().getTime(), email: email, answers: answers, scores: scores };
}

function responses_(form) {
  return form.getResponses().slice().sort(function (a, b) { return a.getTimestamp() - b.getTimestamp(); });
}

// ---------- Settings and user state ----------

function settings_(formId) {
  var raw = PropertiesService.getDocumentProperties().getProperty(SETTINGS_KEY), s = Engine.defaults();
  if (raw) {
    try {
      var saved = JSON.parse(raw);
      // A copied form copies this script and its settings: start fresh on the copy.
      if (!saved.formId || saved.formId === formId) Object.keys(saved).forEach(function (k) { s[k] = saved[k]; });
    } catch (e) { /* bad JSON: defaults */ }
  }
  s.formId = formId;
  return s;
}

function saveSettings_(s) {
  PropertiesService.getDocumentProperties().setProperty(SETTINGS_KEY, JSON.stringify(s));
}

function user_() {
  var p = PropertiesService.getUserProperties();
  var lic = null;
  try { lic = JSON.parse(p.getProperty('licence') || 'null'); } catch (e) { lic = null; }
  return { licence: lic };
}

function isPro_() { return Engine.licenceState(user_().licence, Date.now()).pro; }

/** Free can't change the scale, pass mark or floor, and only has −1/3 and −1/4. */
function effective_(s, pro) {
  if (pro) return s;
  var c = JSON.parse(JSON.stringify(s));
  c.scale = 10; c.pass = 5; c.clampZero = false;
  if (!Engine.canUseRule(c.rule, false)) c.rule = 'f3';
  return c;
}

function ruleLabel_(s, lg) {
  var T = function (k, p) { return Strings.t(lg, k, p); };
  if (s.rule === 'km') return T('r_kmf', { k: s.k, m: s.m }) + (s.fullGroups ? ' · ' + T('fullGroups').replace(/\s*\(.*\)$/, '') : '');
  if (s.rule === 'cu') return T('r_cuf', { f: Engine.num(Number(s.f), lg) });
  return T('r_' + s.rule + 'f');
}

// ---------- What the sidebar asks for ----------

/** Everything the sidebar draws, in one call. */
function getState() {
  return guard_(function () {
    var form = FormApp.getActiveForm(), lg = lang_(), now = Date.now();
    var rf = readForm_(form), s = settings_(form.getId()), u = user_();
    var lic = Engine.licenceState(u.licence, now), pro = lic.pro;
    var check = Engine.checkForm(rf.data);
    var out = {
      lang: lg, title: rf.data.title, check: check, settings: s, pro: pro, now: now,
      licence: { state: lic, key: u.licence && u.licence.key ? mask_(u.licence.key) : '', plan: u.licence && u.licence.plan || '' },
      job: JSON.parse(PropertiesService.getDocumentProperties().getProperty(JOB_KEY) || 'null'),
      sheetUrl: s.sheetId ? 'https://docs.google.com/spreadsheets/d/' + s.sheetId + '/edit' : '',
      ruleLabel: ruleLabel_(effective_(s, pro), lg)
    };
    if (check.state === 'ok' && s.active) {
      var cfg = effective_(s, pro);
      var resps = responses_(form).map(readResponse_);
      var all = Engine.scoreAll(rf.data, resps, cfg);
      out.summary = all.summary;
      out.summary.scale = cfg.scale;
      // Responses whose Forms scores differ from ours: a trigger that failed.
      var behind = 0;
      all.results.forEach(function (res, i) { if (differs_(res.items, resps[i].scores)) behind++; });
      out.summary.behind = behind;
    }
    return out;
  });
}

function mask_(key) { key = String(key); return key.length > 8 ? key.slice(0, 4) + '…' + key.slice(-4) : '…'; }

function differs_(items, scores) {
  for (var id in items) if (Math.abs((scores[id] || 0) - items[id]) > 0.004) return true;
  return false;
}

/** Saves the rule and turns marking on. Returns the state, or { needPro } for a locked choice. */
function activate(cfgIn) {
  return guard_(function () {
    var form = FormApp.getActiveForm(), now = Date.now(), u = user_();
    var pro = Engine.licenceState(u.licence, now).pro;
    var rf = readForm_(form), s = settings_(form.getId());
    ['rule', 'f', 'k', 'm', 'fullGroups', 'scale', 'pass', 'clampZero'].forEach(function (k) { if (k in cfgIn) s[k] = cfgIn[k]; });
    s.k = Math.max(1, Math.round(Number(s.k) || 3)); s.m = Math.max(0.01, Number(s.m) || 1);
    s.f = Number(s.f) || 0; s.pass = Number(s.pass) || 0;
    if (!pro && (!Engine.canUseRule(s.rule, false) || s.scale !== 10 || s.clampZero || s.pass !== 5)) return { needPro: 'rule' };
    var bad = Engine.ruleAllowed(rf.data, s);
    if (bad) return { error: 'rule', text: Strings.t(lang_(), bad === 'notSameValue' ? 'sameValueOnly' : 'errOther', { code: 'NJ-08' }) };
    s.active = true;
    saveSettings_(s);
    ensureTrigger_(form);
    startJob_(form);
    return { ok: true };
  });
}

function deactivate() {
  return guard_(function () {
    var form = FormApp.getActiveForm(), s = settings_(form.getId());
    s.active = false; saveSettings_(s);
    removeTriggers_();
    PropertiesService.getDocumentProperties().deleteProperty(JOB_KEY);
    return { ok: true };
  });
}

// ---------- Rescoring in chunks ----------

function startJob_(form) {
  PropertiesService.getDocumentProperties().setProperty(JOB_KEY, JSON.stringify({ i: 0, n: form.getResponses().length, mode: 'rule' }));
}

/** "Recorregir todas" and "Volver a la puntuación de Forms" start a job; the sidebar then calls rescoreChunk. */
function startRescore(mode) {
  return guard_(function () {
    var form = FormApp.getActiveForm();
    if (mode === 'forms') {
      var s = settings_(form.getId()); s.active = false; saveSettings_(s); removeTriggers_();
    }
    PropertiesService.getDocumentProperties().setProperty(JOB_KEY, JSON.stringify({ i: 0, n: form.getResponses().length, mode: mode === 'forms' ? 'forms' : 'rule' }));
    return { ok: true };
  });
}

/**
 * Works through the job for up to CHUNK_MS and saves where it got to, so a closed sidebar
 * or Google's 6-minute limit loses nothing: the next open shows Continuar.
 * Each answer is judged from the key, never from its current score, so repeating is safe.
 */
function rescoreChunk() {
  return guard_(function () {
    var t0 = Date.now(), props = PropertiesService.getDocumentProperties();
    var job = JSON.parse(props.getProperty(JOB_KEY) || 'null');
    if (!job) return { done: true };
    var form = FormApp.getActiveForm(), rf = readForm_(form), s = settings_(form.getId());
    var pro = isPro_(), cfg = effective_(s, pro);
    var list = responses_(form);
    job.n = list.length;
    var batch = [];
    while (job.i < list.length && Date.now() - t0 < CHUNK_MS) {
      var r = list[job.i], d = readResponse_(r);
      var items = job.mode === 'forms' ? Engine.formsOwnScores(rf.data, d) : Engine.scoreResponse(rf.data, d, cfg).items;
      if (differs_(items, d.scores)) { grade_(r, rf.byId, items); batch.push(r); }
      job.i++;
      if (batch.length >= BATCH) { form.submitGrades(batch); batch = []; props.setProperty(JOB_KEY, JSON.stringify(job)); }
    }
    if (batch.length) form.submitGrades(batch);
    if (job.i >= list.length) {
      props.deleteProperty(JOB_KEY);
      if (job.mode === 'rule' && pro) writeSheet_(form, rf, s);
      return { done: true, i: job.i, n: job.n };
    }
    props.setProperty(JOB_KEY, JSON.stringify(job));
    return { done: false, i: job.i, n: job.n };
  });
}

function grade_(r, byId, items) {
  Object.keys(items).forEach(function (id) {
    var ir = r.getGradableResponseForItem(byId[id]);
    ir.setScore(items[id]);
    r.withItemGrade(ir);
  });
}

// ---------- Automatic correction ----------

function ensureTrigger_(form) {
  var has = ScriptApp.getProjectTriggers().some(function (t) { return t.getHandlerFunction() === 'onSubmit_'; });
  if (!has) ScriptApp.newTrigger('onSubmit_').forForm(form).onFormSubmit().create();
}

function removeTriggers_() {
  ScriptApp.getProjectTriggers().forEach(function (t) { if (t.getHandlerFunction() === 'onSubmit_') ScriptApp.deleteTrigger(t); });
}

/** Rescores only the new response. In Pro, rewrites the results sheet so ranks stay right. */
function onSubmit_(e) {
  var lock = LockService.getDocumentLock();
  if (!lock.tryLock(20000)) return;
  try {
    var form = e && e.source ? e.source : FormApp.getActiveForm();
    var s = settings_(form.getId());
    if (!s.active) return;
    var pro = isPro_();
    var rf = readForm_(form), r = form.getResponse(e.response.getId()), d = readResponse_(r);
    var items = Engine.scoreResponse(rf.data, d, effective_(s, pro)).items;
    grade_(r, rf.byId, items);
    form.submitGrades([r]);
    if (pro) writeSheet_(form, rf, s);
  } catch (err) {
    console.error(ERR.other, err && err.name, where_(err));
  } finally {
    lock.releaseLock();
  }
}

// ---------- Results sheet (Pro), through the Sheets API with drive.file ----------

/** The sheet's link for the sidebar, creating the sheet first if needed. */
function openSheet() {
  return guard_(function () {
    if (!isPro_()) return { needPro: 'sheet' };
    var form = FormApp.getActiveForm(), s = settings_(form.getId());
    writeSheet_(form, readForm_(form), s);
    s = settings_(form.getId());
    return { url: 'https://docs.google.com/spreadsheets/d/' + s.sheetId + '/edit' };
  });
}

function sheetExists_(id) {
  if (!id) return false;
  try { Sheets.Spreadsheets.get(id, { fields: 'spreadsheetId' }); return true; } catch (e) { return false; }
}

function createSheet_(title, lg, s) {
  var T = Strings.table(lg);
  var ss = Sheets.Spreadsheets.create({
    properties: { title: Strings.fill(T.sheetName, { title: title }), locale: Session.getActiveUserLocale() || 'es_ES' },
    sheets: [{ properties: { sheetId: 1, title: T.sheetResults, gridProperties: { frozenRowCount: 5 } } },
      { properties: { sheetId: 2, title: T.sheetQuestions, gridProperties: { frozenRowCount: 1 } } }]
  });
  var green = { red: 0.85, green: 0.94, blue: 0.88 }, red = { red: 0.98, green: 0.87, blue: 0.86 };
  var passCol = { sheetId: 1, startRowIndex: 5, startColumnIndex: 11, endColumnIndex: 12 };
  function rule(text, colour, i) {
    return { addConditionalFormatRule: { index: i, rule: { ranges: [passCol], booleanRule: {
      condition: { type: 'TEXT_EQ', values: [{ userEnteredValue: text }] }, format: { backgroundColor: colour } } } } };
  }
  var bold = function (sheetId, row) {
    return { repeatCell: { range: { sheetId: sheetId, startRowIndex: row, endRowIndex: row + 1 },
      cell: { userEnteredFormat: { textFormat: { bold: true }, backgroundColor: { red: 0.93, green: 0.97, blue: 0.96 } } },
      fields: 'userEnteredFormat(textFormat,backgroundColor)' } };
  };
  Sheets.Spreadsheets.batchUpdate({ requests: [rule(T.yes, green, 0), rule(T.no, red, 1), bold(1, 0), bold(1, 4), bold(2, 0)] }, ss.spreadsheetId);
  s.sheetId = ss.spreadsheetId;
  saveSettings_(s);
  return ss.spreadsheetId;
}

/** Rewrites both sheets fully. Only these two sheets, in a file Nota Justa created. */
function writeSheet_(form, rf, s) {
  var lg = lang_(), T = Strings.table(lg), pro = true, cfg = effective_(s, pro);
  var id = sheetExists_(s.sheetId) ? s.sheetId : createSheet_(rf.data.title, lg, s);
  var resps = responses_(form).map(readResponse_);
  var res = Engine.resultRows(rf.data, resps, cfg, T);
  var tz = Session.getScriptTimeZone();
  var rows = res.rows.map(function (row) {
    return row.map(function (v, i) {
      if (v instanceof Date) return Utilities.formatDate(v, tz, 'yyyy-MM-dd HH:mm');
      return typeof v === 'string' && i !== 11 ? text_(v) : v;
    });
  });
  var heads = Strings.t(lg, 'sheetHeaders', { s: cfg.scale });
  if (cfg.scale === 'pts') heads[10] = T.sheetHeadersPts;
  var sm = res.summary;
  var top = [T.sheetSummary, [sm.responses, sm.avg, sm.passPct / 100, sm.high, sm.low],
    [text_(Strings.fill(T.sheetRule, { rule: ruleLabel_(cfg, lg) })), sm.hasGrid ? text_(T.sheetGrid) : ''], [''], heads];
  var q = Engine.questionRows(rf.data, resps).map(function (row) {
    return row.map(function (v, i) { return typeof v === 'string' ? text_(v) : (i >= 3 && i <= 5 ? v / 100 : v); });
  });
  var R = T.sheetResults, Q = T.sheetQuestions;
  Sheets.Spreadsheets.Values.batchClear({ ranges: [R, Q] }, id);
  Sheets.Spreadsheets.Values.batchUpdate({ valueInputOption: 'USER_ENTERED', data: [
    { range: R + '!A1', values: top.concat(rows) },
    { range: Q + '!A1', values: [T.qHeaders].concat(q) }
  ] }, id);
  Sheets.Spreadsheets.batchUpdate({ requests: [
    numFmt_(1, 1, 2, 2, 3, 'PERCENT', '0%'), numFmt_(1, 5, 7, 10, 11, 'NUMBER', '0.00'), numFmt_(2, 1, 3, 6, 0, 'PERCENT', '0%')
  ] }, id);
  s.lastDone = resps.length ? resps[resps.length - 1].id : '';
  saveSettings_(s);
}

/** Text from students goes in as text, never as a formula, date or number. */
function text_(v) { v = String(v); return v.charAt(0) === "'" ? v : "'" + v; }

function numFmt_(sheetId, r0, c0, c1, r1, type, pattern) {
  var range = { sheetId: sheetId, startRowIndex: r0, startColumnIndex: c0, endColumnIndex: c1 };
  if (r1) range.endRowIndex = r1;
  return { repeatCell: { range: range, cell: { userEnteredFormat: { numberFormat: { type: type, pattern: pattern } } }, fields: 'userEnteredFormat.numberFormat' } };
}

// ---------- Licence: checked from the sidebar's browser ----------

/** What the sidebar sends to Freemius: a hashed id, the key and the product name. Never form data. */
function licenceRequest(key) {
  var u = user_(), lic = u.licence || {};
  return {
    ok: !!LICENCE.productId, uid: uid_(), key: String(key || lic.key || '').trim(), installId: lic.installId || '',
    productId: LICENCE.productId, academyPlanId: LICENCE.academyPlanId, apiBase: LICENCE.apiBase, title: LICENCE.title
  };
}

/**
 * One id per teacher, the same in every form they paste Nota Justa into, so a teacher uses one
 * activation and not one per form. A hash of the account email: the email itself never leaves Google.
 */
function uid_() {
  var p = PropertiesService.getUserProperties(), uid = p.getProperty('uid');
  if (uid) return uid;
  var email = '';
  try { email = Session.getEffectiveUser().getEmail(); } catch (e) { email = ''; }
  uid = hex32_('nota-justa:' + (email || Utilities.getUuid()));
  p.setProperty('uid', uid);
  return uid;
}

function hex32_(text) {
  var bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, text, Utilities.Charset.UTF_8);
  return bytes.map(function (b) { return ('0' + (b & 255).toString(16)).slice(-2); }).join('').slice(0, 32);
}

/** Stores what Freemius said: { status: 'ok'|'invalid'|'expired'|'offline'|'remove', key, plan, expires (ms or 0), installId }. */
function recordLicence(result) {
  return guard_(function () {
    var p = PropertiesService.getUserProperties(), now = Date.now();
    var lic = null;
    try { lic = JSON.parse(p.getProperty('licence') || 'null'); } catch (e) { lic = null; }
    if (result.status === 'remove') { p.deleteProperty('licence'); lic = null; }
    else if (result.status === 'ok') {
      lic = { key: result.key || (lic && lic.key) || '', installId: String(result.installId || (lic && lic.installId) || ''),
        plan: result.plan || 'pro', expires: Number(result.expires) || 0, checked: now, status: 'ok' };
      p.setProperty('licence', JSON.stringify(lic));
    } else if (lic && (result.status === 'expired' || result.status === 'invalid')) {
      lic.status = result.status === 'invalid' ? 'invalid' : 'ok';
      if (result.status === 'expired') lic.expires = Number(result.expires) || now - 1;
      lic.checked = now;
      p.setProperty('licence', JSON.stringify(lic));
    }
    // offline: nothing changes; the 30-day grace runs from the last good check.
    return Engine.licenceState(lic, now);
  });
}

function dateWords_(ms) {
  return Utilities.formatDate(new Date(ms), Session.getScriptTimeZone(), 'd/M/yyyy');
}

var HTML_FILES_ = {"Sidebar":"<!DOCTYPE html>\n<html>\n<head>\n<base target=\"_top\">\n<meta charset=\"utf-8\">\n<style>\n/* Google add-on CSS values: Arial 13/18, one blue primary per view */\n*{box-sizing:border-box}\nhtml,body{margin:0;height:100%}\nbody{font:13px/18px Arial,\"Liberation Sans\",sans-serif;color:#222;background:#fff}\n#app{padding:14px 12px 16px;display:flex;flex-direction:column;gap:12px}\n.t{font-size:16px;line-height:22px;font-weight:700;margin:0;color:#202124}\n.st{font-size:12px;color:#5f6368;margin:2px 0 0}\n.h{font-weight:700;margin:0;color:#202124}\n.small{font-size:11px;line-height:16px;color:#777;margin:0}\n.p{margin:0}\n.chk{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px}\n.chk li{display:grid;grid-template-columns:16px minmax(0,1fr);gap:7px}\n.chk i{font-style:normal;font-weight:700;width:16px;height:16px;border-radius:50%;display:grid;place-items:center;font-size:11px;line-height:1;margin-top:1px;color:#fff;background:#137333}\n.chk i.w{background:#e8a200}.chk i.i{background:#5f6368;font-family:Georgia,serif}.chk i.x{background:#c5221f}\n.btn{appearance:none;font:700 13px/27px Arial,\"Liberation Sans\",sans-serif;height:29px;padding:0 12px;border-radius:2px;cursor:pointer;color:#fff;background:linear-gradient(#4d90fe,#4787ed);border:1px solid #3079ed;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.btn:hover{box-shadow:0 1px 1px rgba(0,0,0,.2)}\n.btn2{appearance:none;font:700 13px/27px Arial,\"Liberation Sans\",sans-serif;height:29px;padding:0 12px;border-radius:2px;cursor:pointer;color:#444;background:linear-gradient(#f5f5f5,#f1f1f1);border:1px solid #dcdcdc;width:100%}\n.btn[disabled],.btn2[disabled],.lnk[disabled]{opacity:.5;cursor:default;box-shadow:none}\n.lnk{color:#15c;background:none;border:0;padding:0;font:13px/18px Arial,\"Liberation Sans\",sans-serif;cursor:pointer;text-align:left}\n.lnk:hover{text-decoration:underline}\n.links{display:flex;flex-wrap:wrap;gap:4px 6px;align-items:center;color:#999}\n.box{background:#f8f7f5;border-radius:4px;padding:9px 10px;margin:0;font-size:12px;line-height:17px;color:#444}\n.warnbox{background:#fef7e0;border-left:3px solid #e8a200;padding:8px 10px;font-size:12px;line-height:17px;margin:0;display:flex;flex-direction:column;gap:6px}\n.ok{display:flex;gap:7px;align-items:center;color:#137333;font-weight:700;margin:0;font-size:14px}\n.ok.off{color:#5f6368}\n.rules{display:flex;flex-direction:column;gap:6px;margin:0;padding:0;border:0}\n.rc{display:grid;grid-template-columns:16px minmax(0,1fr) auto;gap:4px 7px;align-items:start;border:1px solid #e3e3e3;border-radius:4px;padding:8px 9px;cursor:pointer;background:#fff}\n.rc:hover{border-color:#c6c6c6}\n.rc.on{border-color:#4d90fe;background:#f1f6fe;box-shadow:inset 0 0 0 1px #4d90fe}\n.rc input[type=radio]{margin:2px 0 0}\n.rc b{font-weight:700;color:#202124;display:block}\n.rc .f{color:#5f6368;font-size:12px;display:block}\n.rc .hint{color:#137333;font-size:11px;display:block}\n.rc .sub{grid-column:2/-1;display:flex;flex-wrap:wrap;gap:4px;align-items:center;font-size:12px;color:#444}\n.rc.lock{background:#fafafa}\n.rc.lock b{color:#5f6368}\n.pro{display:inline-block;font-size:10px;line-height:14px;padding:0 5px;border-radius:7px;background:#fef7e0;color:#8a5a00;font-weight:700;border:1px solid #f3d27a;white-space:nowrap}\n.mini{border:1px solid #d9d9d9;border-top-color:silver;height:24px;width:48px;padding:0 4px;font:12px Arial,sans-serif;text-align:center}\n.mini[disabled]{background:#f5f5f5}\n.opt{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center;font-size:12px}\n.opt select,.opt input[type=number]{border:1px solid #d9d9d9;height:26px;font:12px Arial,sans-serif;width:72px;padding:0 4px}\n.opt label{display:flex;gap:6px;align-items:center}\n.opt.lockd{color:#777}\n.prog{height:4px;background:#e8f0fe;border-radius:2px;overflow:hidden}\n.prog i{display:block;height:100%;background:#4d90fe;width:0;transition:width .15s linear}\n.sep{border:0;border-top:1px solid #eceff1;margin:0}\n.input{border:1px solid #d9d9d9;border-top-color:silver;height:29px;padding:0 8px;font:13px Arial,sans-serif;width:100%}\n.err{color:#c5221f;font-size:12px;line-height:16px;margin:0}\n.bar{display:flex;justify-content:space-between;align-items:center;gap:8px}\n.plan{display:inline-block;font-size:11px;line-height:16px;padding:0 6px;border-radius:8px;background:#f1f3f4;color:#5f6368;font-weight:700}\n.plan.on{background:#e6f4ea;color:#137333}\n.ul{margin:0;padding-left:16px;display:flex;flex-direction:column;gap:4px}\n.price{font-size:14px;line-height:20px;margin:0}\n/* Before and now, as two bars on the same scale: the drop is the moment the teacher gets it */\n.res{border-radius:6px;background:#f8f7f5;padding:10px}\n.res .row{display:grid;grid-template-columns:62px minmax(0,1fr) 44px;gap:6px;align-items:center;font-size:12px;margin:4px 0}\n.res .tr{height:12px;background:#e8eaed;border-radius:2px;overflow:hidden}\n.res .tr i{display:block;height:100%;background:#9aa0a6;transition:width .6s}\n.res .row.now .tr i{background:#4d90fe}\n.res .row b{text-align:right}\n.res .row.now b{font-size:15px;color:#202124}\n.stats{margin:0;display:flex;flex-direction:column;gap:2px}\n.foot{font-size:11px;line-height:16px;color:#777;display:flex;justify-content:space-between;gap:8px;border-top:1px solid #f1f1f1;padding-top:8px}\n</style>\n</head>\n<body>\n<div id=\"app\" aria-live=\"polite\"></div>\n<script>\n(function () {\n  'use strict';\n  var BOOT = <?!= boot ?>;\n  var T = BOOT.T, lg = BOOT.lang;\n  var st = { view: null, s: null, cfg: null, msg: null, busy: false };\n  var app = document.getElementById('app');\n\n  // ---- Small helpers. Text goes in with textContent only. ----\n  function fill(s, p) {\n    p = p || {};\n    return String(s)\n      .replace(/\\[(\\w+):([^|\\]]*)\\|([^\\]]*)\\]/g, function (_, k, one, many) { return Number(p[k]) === 1 ? one : many; })\n      .replace(/\\{(\\w+)\\}/g, function (m, k) { return p[k] !== undefined ? p[k] : m; });\n  }\n  function t(k, p) { return T[k] === undefined ? k : fill(T[k], p); }\n  function h(tag, a, kids) {\n    var el = document.createElement(tag);\n    Object.keys(a || {}).forEach(function (k) {\n      var v = a[k];\n      if (v === undefined || v === null || v === false) return;\n      if (k === 'text') el.textContent = v;\n      else if (k === 'class') el.className = v;\n      else if (k.slice(0, 2) === 'on') el.addEventListener(k.slice(2), v);\n      else el.setAttribute(k, v === true ? '' : v);\n    });\n    (kids || []).forEach(function (c) { if (c) el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });\n    return el;\n  }\n  function render(nodes) {\n    app.textContent = '';\n    nodes.forEach(function (n) { if (n) app.appendChild(n); });\n  }\n  function num(x, d) {\n    if (x === null || x === undefined || isNaN(x)) return '—';\n    d = d === undefined ? 2 : d;\n    var comma = lg !== 'en', parts = Math.abs(x).toFixed(d).split('.');\n    parts[0] = parts[0].replace(/\\B(?=(\\d{3})+(?!\\d))/g, comma ? (lg === 'fr' ? ' ' : '.') : ',');\n    return (x < -0.004 ? '−' : '') + parts.join(comma ? ',' : '.');\n  }\n  function dateWords(ms) { var d = new Date(ms); return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear(); }\n  function list(ns) {\n    if (ns.length < 2) return ns.join('');\n    return ns.slice(0, -1).join(', ') + ' ' + t('and') + ' ' + ns[ns.length - 1];\n  }\n  function lockAll(on) {\n    st.busy = on;\n    Array.prototype.forEach.call(app.querySelectorAll('button,input,select'), function (b) { b.disabled = on || b.hasAttribute('data-off'); });\n  }\n\n  /** Calls the server. Errors from guard_ come back as { error, text } and show at the top. */\n  function call(fn, args, ok) {\n    var r = google.script.run.withSuccessHandler(function (res) {\n      if (res && res.error && res.text) { st.msg = { level: 'error', text: res.text }; lockAll(false); draw(); return; }\n      ok(res);\n    }).withFailureHandler(function () {\n      st.msg = { level: 'error', text: t('errOther', { code: 'NJ-07' }) }; lockAll(false); draw();\n    });\n    r[fn].apply(r, args || []);\n  }\n\n  function load(then) {\n    call('getState', [], function (s) {\n      st.s = s;\n      if (!st.cfg) st.cfg = JSON.parse(JSON.stringify(s.settings));\n      if (then) then();\n      if (s.licence.state.recheck && !st.checked) { st.checked = true; Licence.validate(function () { load(draw); }); }\n    });\n  }\n\n  function notice() {\n    if (!st.msg) return null;\n    return h('p', { class: st.msg.level === 'error' ? 'err' : 'box', role: 'status', text: st.msg.text });\n  }\n\n  function head() {\n    var s = st.s, l = s.licence;\n    var plan = s.pro ? (l.plan === 'academy' ? t('planAcademy') : t('planPro')) : t('planFree');\n    return h('div', { class: 'bar' }, [\n      h('div', {}, [h('p', { class: 't', text: t('title') }), h('p', { class: 'st', text: t('tagline') })]),\n      h('button', { class: 'plan' + (s.pro ? ' on' : ''), style: 'border:0;cursor:pointer', text: plan, title: t('keyTitle'), onclick: function () { st.msg = null; st.view = 'licence'; draw(); } })\n    ]);\n  }\n\n  function foot() {\n    return h('div', { class: 'foot' }, [\n      h('button', { class: 'lnk', style: 'font-size:11px', text: t('help'), onclick: function () { window.open(BOOT.site + (lg === 'es' ? '/soporte/' : '/en/support/'), '_blank', 'noopener'); } }),\n      h('span', { text: 'Facilo · v' + BOOT.version })\n    ]);\n  }\n\n  // ---- Views ----\n\n  function draw() {\n    var s = st.s;\n    if (!s) return;\n    if (!st.view) st.view = s.job ? 'progress' : s.settings.active ? 'active' : 'check';\n    if (s.check.state !== 'ok' && st.view !== 'licence' && st.view !== 'pro') st.view = 'check';\n    ({ check: drawCheck, rule: drawRule, active: drawActive, progress: drawProgress, pro: drawPro, licence: drawLicence, revert: drawRevert })[st.view]();\n  }\n\n  function drawCheck() {\n    var c = st.s.check, li = [];\n    function row(kind, mark, text) { return h('li', {}, [h('i', { class: kind, 'aria-hidden': 'true', text: mark }), h('span', { text: text })]); }\n    if (!c.isQuiz) li.push(row('x', '×', t('notQuiz')));\n    else {\n      li.push(row('', '✓', t('isQuiz')));\n      if (c.gradable.length) li.push(row('', '✓', t('nGradable', { g: c.gradable.length })));\n      if (c.noKey.length) li.push(row('w', '!', t('nNoKey', { k: c.noKey.length, list: list(c.noKey) })));\n      if (c.text.length) li.push(row('i', 'i', t('nText', { t: c.text.length })));\n      if (c.grid.length) li.push(row('i', 'i', t('nGrid', { d: c.grid.length })));\n      if (!c.gradable.length) li.push(row('x', '×', t('nothing')));\n    }\n    var go = c.state === 'ok';\n    render([head(), notice(), h('p', { class: 'h', text: t('yourForm') }), h('ul', { class: 'chk' }, li),\n      c.grid.length ? h('p', { class: 'small', text: t('gridWhy') }) : null,\n      go ? h('button', { class: 'btn', text: t('chooseRule'), onclick: function () { st.msg = null; st.view = 'rule'; draw(); } })\n        : h('button', { class: 'btn2', text: t('recheck'), onclick: function () { lockAll(true); st.msg = null; load(function () { lockAll(false); draw(); }); } }),\n      foot()]);\n  }\n\n  var PRO_RULES = { f2: 1, opt: 1, km: 1, p4: 1 };\n\n  function drawRule() {\n    var s = st.s, cfg = st.cfg, pro = s.pro, sameValue = s.check.sameValue;\n    function locked(rule) { return !pro && PRO_RULES[rule]; }\n    function card(rule, extra) {\n      var lock = locked(rule), on = cfg.rule === rule;\n      var radio = h('input', { type: 'radio', name: 'rule', value: rule, checked: on, 'aria-label': t('r_' + rule) });\n      var el = h('label', { class: 'rc' + (on ? ' on' : '') + (lock ? ' lock' : '') }, [radio,\n        h('span', {}, [h('b', { text: t('r_' + rule) }), T['r_' + rule + 'f'] && rule !== 'km' && rule !== 'cu' ? h('span', { class: 'f', text: t('r_' + rule + 'f') }) : null,\n          T['r_' + rule + 'h'] ? h('span', { class: 'hint', text: t('r_' + rule + 'h') }) : null]),\n        lock ? h('span', { class: 'pro', text: t('proTag') }) : h('span'),\n        extra || null]);\n      el.addEventListener('click', function (e) {\n        if (lock) { e.preventDefault(); st.view = 'pro'; draw(); return; }\n        if (cfg.rule !== rule) { cfg.rule = rule; if (rule === 'f3') cfg.f = 1 / 3; drawRule(); }\n      });\n      return el;\n    }\n    function mini(key, step, min) {\n      return h('input', { class: 'mini', type: 'number', step: step, min: min, value: String(cfg[key]).replace(/(\\.\\d{2})\\d+$/, '$1'),\n        disabled: locked('km') && key !== 'f' || locked('cu') && key === 'f', oninput: function (e) { cfg[key] = Number(e.target.value); },\n        onclick: function (e) { e.stopPropagation(); } });\n    }\n    var kmBox = h('span', { class: 'sub' }, [t('r_kmA'), mini('k', 1, 1), t('r_kmB'), mini('m', 1, 0.5), t('r_kmC')]);\n    var groups = h('label', { class: 'sub', style: 'flex-wrap:nowrap;align-items:flex-start;gap:6px', onclick: function (e) { e.stopPropagation(); } }, [\n      h('input', { type: 'checkbox', style: 'margin:2px 0 0', checked: cfg.fullGroups, disabled: !pro || !sameValue, onchange: function (e) { cfg.fullGroups = e.target.checked; } }),\n      h('span', { text: t('fullGroupsK', { r: Math.max(1, cfg.k - 1) }) + (sameValue ? '' : ' · ' + t('sameValueOnly')) })]);\n    var cuBox = h('span', { class: 'sub' }, [t('r_cuA'), mini('f', 0.05, 0), t('r_cuB')]);\n    var cards = [card('f3'), card('f4'), card('f2'), card('opt'), card('km', h('span', { class: 'sub', style: 'flex-direction:column;align-items:flex-start' }, [kmBox, groups])),\n      card('p4'), card('cu', cuBox)];\n\n    var dis = !pro;\n    var scale = h('select', { disabled: dis, onchange: function (e) { cfg.scale = e.target.value === 'pts' ? 'pts' : Number(e.target.value); } },\n      ['10', '20', '100', 'pts'].map(function (v) { return h('option', { value: v, selected: String(cfg.scale) === v, text: v === 'pts' ? t('scalePts') : v }); }));\n    var pass = h('input', { type: 'number', step: '0.5', min: '0', value: String(cfg.pass), disabled: dis, oninput: function (e) { cfg.pass = Number(e.target.value); } });\n    var clamp = h('input', { type: 'checkbox', checked: cfg.clampZero, disabled: dis, onchange: function (e) { cfg.clampZero = e.target.checked; } });\n    function opt(label, ctrl) { return h('div', { class: 'opt' + (dis ? ' lockd' : '') }, [h('span', {}, [label, dis ? ' ' : '', dis ? h('span', { class: 'pro', text: t('proTag') }) : null]), ctrl]); }\n\n    var btn = h('button', { class: 'btn', text: s.settings.active ? t('save') : t('activate'), onclick: function () {\n      st.msg = null; lockAll(true);\n      call('activate', [cfg], function (res) {\n        if (res.needPro) { lockAll(false); st.view = 'pro'; st.proWhy = res.needPro; draw(); return; }\n        st.view = 'progress'; st.cfg = null; st.stepping = true; load(function () { draw(); step(); });\n      });\n    } });\n    render([head(), notice(), h('p', { class: 'h', text: t('ruleQ') }), h('div', { class: 'rules', role: 'radiogroup' }, cards),\n      h('p', { class: 'small', text: t('blanks') }), h('hr', { class: 'sep' }),\n      opt(t('scale'), scale), opt(t('pass'), pass), h('div', { class: 'opt' + (dis ? ' lockd' : '') }, [h('label', {}, [clamp, t('clamp')]), dis ? h('span', { class: 'pro', text: t('proTag') }) : h('span')]),\n      btn, h('p', { class: 'small', text: t('checkYourRule') }),\n      h('div', { class: 'links' }, [h('button', { class: 'lnk', text: t('back'), onclick: function () { st.cfg = null; st.view = null; st.msg = null; load(draw); } })]),\n      foot()]);\n  }\n\n  function drawActive() {\n    var s = st.s, sm = s.summary || { done: 0, avg: 0, avgBefore: 0, negative: 0, behind: 0, scale: 10 };\n    var on = s.settings.active, max = sm.scale === 'pts' ? s.check.max * (sm.factor || 1) : Number(sm.scale) || 10;\n    function bar(label, v, now) {\n      var w = Math.max(0, Math.min(100, max ? v / max * 100 : 0));\n      return h('div', { class: 'row' + (now ? ' now' : '') }, [h('span', { text: label }), h('span', { class: 'tr' }, [h('i', { style: 'width:' + w.toFixed(1) + '%' })]), h('b', { text: num(v) })]);\n    }\n    var nodes = [head(), notice(),\n      h('p', { class: 'ok' + (on ? '' : ' off'), text: (on ? '✓ ' : '') + (on ? t('active') : t('paused')) }),\n      h('p', { class: 'p', text: t('ruleIs', { rule: s.ruleLabel }) })];\n    if (sm.done) {\n      nodes.push(h('div', { class: 'res' }, [\n        h('p', { class: 'h', style: 'margin-bottom:4px', text: t('avg', { a: num(sm.avg), s: sm.scale === 'pts' ? t('scalePts') : sm.scale }) }),\n        bar(t('barBefore'), sm.avgBefore, false), bar(t('barNow'), sm.avg, true)]));\n      nodes.push(h('div', { class: 'stats' }, [h('span', { text: t('corrected', { n: sm.done }) }),\n        sm.negative ? h('span', { text: t('negative', { n: sm.negative }) }) : null]));\n    } else nodes.push(h('p', { class: 'box', text: t('corrected', { n: 0 }) }));\n    if (on && sm.behind) nodes.push(h('div', { class: 'warnbox' }, [h('span', { text: t('pending', { n: sm.behind }) }),\n      h('button', { class: 'lnk', text: t('fixNow'), onclick: function () { rescore('rule'); } })]));\n    if (on) nodes.push(h('p', { class: 'small', text: t('autoNote') }), h('p', { class: 'box', text: t('tip') }));\n    nodes.push(s.pro\n      ? h('button', { class: 'btn', text: t('openSheet'), onclick: function (e) {\n          var b = e.target; b.disabled = true;\n          var w = window.open('', '_blank');   // opened now, while the click still counts, then pointed at the sheet\n          call('openSheet', [], function (res) { b.disabled = false; if (res.url && w) w.location.href = res.url; else if (w) w.close(); if (res.needPro) { st.view = 'pro'; draw(); } });\n        } })\n      : h('button', { class: 'btn', text: t('openSheet') + ' · ' + t('proTag'), onclick: function () { st.view = 'pro'; draw(); } }));\n    nodes.push(h('div', { class: 'links' }, [\n      h('button', { class: 'lnk', text: t('rescoreAll'), onclick: function () { rescore('rule'); }, disabled: !on, 'data-off': !on }), '·',\n      h('button', { class: 'lnk', text: t('changeRule'), onclick: function () { st.msg = null; st.cfg = JSON.parse(JSON.stringify(s.settings)); st.view = 'rule'; draw(); } }), '·',\n      on ? h('button', { class: 'lnk', text: t('deactivate'), onclick: function () { lockAll(true); call('deactivate', [], function () { st.msg = null; load(function () { lockAll(false); draw(); }); }); } })\n        : h('button', { class: 'lnk', text: t('reactivate'), onclick: function () { st.cfg = JSON.parse(JSON.stringify(s.settings)); st.view = 'rule'; draw(); } })]));\n    nodes.push(h('p', { class: 'small', text: t('manualNote') }));\n    nodes.push(h('button', { class: 'lnk', style: 'font-size:12px', text: t('revert'), onclick: function () { st.view = 'revert'; draw(); } }));\n    nodes.push(foot());\n    render(nodes);\n  }\n\n  function drawRevert() {\n    render([head(), h('p', { class: 'warnbox', text: t('revertAsk') }),\n      h('button', { class: 'btn', text: t('confirm'), onclick: function () { rescore('forms'); } }),\n      h('button', { class: 'btn2', text: t('cancel'), onclick: function () { st.view = 'active'; draw(); } }), foot()]);\n  }\n\n  // ---- Rescoring: the sidebar drives it in chunks, so nothing is lost if it closes ----\n  function rescore(mode) {\n    lockAll(true); st.msg = null;\n    call('startRescore', [mode], function () { st.stepping = true; st.view = 'progress'; st.s.job = { i: 0, n: 0 }; draw(); step(); });\n  }\n  function step() {\n    call('rescoreChunk', [], function (r) {\n      if (r.done) { st.msg = { level: 'ok', text: t('done') }; st.view = 'active'; load(draw); return; }\n      st.s.job = { i: r.i, n: r.n }; drawProgress(); step();\n    });\n  }\n  function drawProgress() {\n    var j = st.s.job || { i: 0, n: 0 }, pct = j.n ? j.i / j.n * 100 : 0;\n    var nodes = [head(), notice(), h('p', { class: 'h', text: j.n ? t('progress', { i: num(j.i, 0), n: num(j.n, 0) }) : t('working') }),\n      h('div', { class: 'prog', role: 'progressbar', 'aria-valuenow': String(Math.round(pct)), 'aria-valuemin': '0', 'aria-valuemax': '100' }, [h('i', { style: 'width:' + pct.toFixed(1) + '%' })])];\n    if (!st.stepping) nodes.push(h('p', { class: 'small', text: t('continuing') }),\n      h('button', { class: 'btn', text: t('continue'), onclick: function () { st.stepping = true; drawProgress(); step(); } }));\n    nodes.push(foot());\n    render(nodes);\n  }\n\n  function drawPro() {\n    var s = st.s, nodes = [head(), notice()];\n    nodes.push(h('p', { class: 't', text: t('proTitle') }),\n      h('ul', { class: 'ul' }, ['pro1', 'pro2', 'pro3', 'pro4'].map(function (k) { return h('li', { text: t(k) }); })),\n      h('p', { class: 'price' }, [h('b', { text: t('proPrice') })]), h('p', { class: 'small', text: t('proAcademy') }),\n      h('button', { class: 'btn', text: t('seePlans'), onclick: function () { window.open(BOOT.checkout, '_blank', 'noopener'); } }),\n      h('div', { class: 'links' }, [h('span', { text: t('haveKey') }), h('button', { class: 'lnk', text: t('enterKey'), onclick: function () { st.view = 'licence'; draw(); } })]),\n      h('button', { class: 'lnk', text: t('back'), onclick: function () { st.proWhy = null; st.view = null; draw(); } }), foot());\n    render(nodes);\n  }\n\n  // ---- Licence: Freemius is called from this browser. Only a hashed id, the key and the name leave. ----\n  var Licence = {\n    request: function (method, url, body, done) {\n      if (window.NJ_FETCH) return window.NJ_FETCH(method, url, body, done); // local preview only\n      var opt = { method: method, headers: { 'Content-Type': 'application/json' } };\n      if (body) opt.body = JSON.stringify(body);\n      fetch(url, opt).then(function (res) {\n        return res.json().then(function (j) { done(null, res.status, j); }, function () { done(null, res.status, {}); });\n      }, function () { done('offline'); });\n    },\n    outcome: function (status, json) {\n      var e = json && json.error, code = e && (e.code || e.type) || '';\n      if (/activation|limit|already|in_use|used/i.test(code)) return 'used';\n      if (status >= 400 && status < 500) return 'wrong';\n      if (status >= 500 || !status) return 'offline';\n      return null;\n    },\n    finish: function (req, lic, installId, done) {\n      var expires = lic.expiration ? Date.parse(String(lic.expiration).replace(' ', 'T') + 'Z') || 0 : 0;\n      var cancelled = lic.is_cancelled === true || lic.is_cancelled === 1;\n      var plan = String(lic.plan_id) === String(req.academyPlanId) || /acad/i.test(String(lic.plan_name || lic.plan_title || '')) ? 'academy' : 'pro';\n      var now = Date.now(), status = cancelled || (expires && expires < now) ? 'expired' : 'ok';\n      call('recordLicence', [{ status: status, key: req.key, plan: plan, expires: cancelled && (!expires || expires > now) ? now - 1 : expires, installId: installId }],\n        function (l) { done(status, l); });\n    },\n    activate: function (key, done) {\n      call('licenceRequest', [key], function (req) {\n        if (!req.ok) return done('notReady');\n        var base = req.apiBase + '/products/' + req.productId;\n        Licence.request('POST', base + '/licenses/activate.json', { uid: req.uid, license_key: req.key, title: req.title }, function (err, status, j) {\n          if (err) return done('offline');\n          var bad = Licence.outcome(status, j);\n          if (bad) return done(bad);\n          var installId = j.install_id || (j.install && j.install.id) || j.id;\n          Licence.request('GET', base + '/installs/' + installId + '/license.json?uid=' + encodeURIComponent(req.uid) + '&license_key=' + encodeURIComponent(req.key), null, function (err2, s2, lic) {\n            if (err2) return done('offline');\n            var bad2 = Licence.outcome(s2, lic);\n            if (bad2) return done(bad2);\n            Licence.finish(req, lic, String(installId), done);\n          });\n        });\n      });\n    },\n    validate: function (done) {\n      call('licenceRequest', [''], function (req) {\n        if (!req.ok || !req.installId) return done('none');\n        var url = req.apiBase + '/products/' + req.productId + '/installs/' + req.installId + '/license.json?uid=' + encodeURIComponent(req.uid) + '&license_key=' + encodeURIComponent(req.key);\n        Licence.request('GET', url, null, function (err, status, lic) {\n          var bad = err ? 'offline' : Licence.outcome(status, lic);\n          if (bad) return call('recordLicence', [{ status: bad === 'offline' ? 'offline' : bad === 'wrong' ? 'invalid' : 'expired' }], function (l) { done(bad, l); });\n          Licence.finish(req, lic, req.installId, done);\n        });\n      });\n    }\n  };\n\n  function drawLicence() {\n    var s = st.s, L = s.licence, ls = L.state, nodes = [head(), notice(), h('p', { class: 't', text: t('keyTitle') })];\n    if (ls.pro) {\n      nodes.push(h('p', { class: 'ok', text: '✓ ' + (ls.expires ? t('proUntil', { date: dateWords(ls.expires) }) : t('proForever')) }));\n      if (ls.reason === 'ok' && ls.recheck) nodes.push(h('p', { class: 'warnbox', text: t('errOffline', { date: dateWords(ls.graceUntil) }) }));\n      nodes.push(h('p', { class: 'small', text: L.key }));\n    } else if (ls.reason === 'expired') nodes.push(h('p', { class: 'err', text: t('errExpired') }));\n    else if (ls.reason === 'invalid') nodes.push(h('p', { class: 'err', text: t('errKey') }));\n    else if (ls.reason === 'offline') nodes.push(h('p', { class: 'err', text: t('errOfflineOver') }));\n    var key = h('input', { class: 'input', id: 'key', autocomplete: 'off', spellcheck: 'false', placeholder: 'sk_…', 'aria-label': t('keyTitle') });\n    var btn = h('button', { class: 'btn', text: t('keyActivate'), onclick: function () {\n      var k = key.value.trim();\n      if (!k) { key.focus(); return; }\n      lockAll(true);\n      Licence.activate(k, function (res) {\n        var text = { wrong: t('errKey'), used: t('errSeats'), offline: t('errOffline', { date: '—' }).split('.')[0] + '.', entity: t('notReady'), notReady: t('notReady'), expired: t('errExpired') }[res];\n        st.msg = text ? { level: 'error', text: text } : null;\n        load(function () { lockAll(false); if (res === 'ok') st.view = null; draw(); });\n      });\n    } });\n    nodes.push(key, btn);\n    if (ls.pro) nodes.push(h('button', { class: 'lnk', text: t('keyRemove'), onclick: function () {\n      lockAll(true); call('recordLicence', [{ status: 'remove' }], function () { st.msg = null; load(function () { lockAll(false); draw(); }); });\n    } }));\n    else nodes.push(h('button', { class: 'lnk', text: t('seePlans'), onclick: function () { window.open(BOOT.checkout, '_blank', 'noopener'); } }));\n    nodes.push(h('button', { class: 'lnk', text: t('back'), onclick: function () { st.msg = null; st.view = null; draw(); } }), foot());\n    render(nodes);\n  }\n\n  render([h('p', { class: 'small', text: t('working') })]);\n  load(function () { if (st.s.job) st.stepping = false; draw(); });\n})();\n</script>\n</body>\n</html>\n"};
