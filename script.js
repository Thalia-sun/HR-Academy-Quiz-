/**

- ============================================================
- UPSKILL ACADEMY — script.js
- © Copyright by Sara Manoochehri
- ============================================================
- HINWEIS: Keine ‘use strict’ auf Modulebene, damit alle
- Funktionen als globale window-Funktionen verfügbar sind
- und von onclick=”” im HTML aufgerufen werden können.
- ============================================================
  */

/* ============================================================
SECTION 1 – TRANSLATIONS (i18n)
============================================================ */
const TR = {
de: {
navHome:‘Home’, navWhat:‘Was ist UA’, navTopics:‘Themen’,
navCert:‘Zertifikat’, navAbout:‘Über mich’, navLogin:‘Anmelden’, langLabel:‘Sprache’,
heroBadge:‘Interaktives Lernen’, heroTitle:‘Academy’,
heroDesc:‘Die Upskill Academy App ist eine interaktive Lernplattform für HR, Gehaltsabrechnung und mehr – auch am Smartphone.’,
heroQuiz:‘🚀 Zum Quiz’, heroMore:‘Mehr erfahren’,
featLabel:‘Warum Upskill Academy?’, featTitle:‘Lernen, das wirklich funktioniert’,
featSub:‘Entwickelt für Kursteilnehmer in Weiterbildungsprogrammen.’,
f1T:‘Sofortiges Feedback’, f1P:‘Nach jeder Antwort siehst du direkt ob du richtig lagst.’,
f2T:‘Lernen unterwegs’,   f2P:‘Optimiert für Smartphone und Tablet.’,
f3T:‘Praxisnah’,          f3P:‘Echte Inhalte aus Weiterbildungskursen.’,
f4T:‘Persönliche Urkunde’,f4P:‘Zertifikat nach Abschluss.’,
s1:‘Fragen · HR’, s2:‘Sprachen’, s3:‘Module’, s4:‘Gratis starten’,
apLabel:‘Die Plattform’, apTitle:‘Was ist Upskill Academy?’,
apSub:‘Interaktive Lernapp für Weiterbildungskurse.’,
st1T:‘Quiz-basiertes Lernen’, st1P:‘Lerne durch gezielte Fragen und Antworten.’,
st2T:‘Sofortiges Feedback’,   st2P:‘Verstehe warum eine Antwort richtig oder falsch ist.’,
st3T:‘Stufensystem’,          st3P:‘Von Grundlagen bis Expertenlevel.’,
st4T:‘Drei Sprachen’,         st4P:‘DE, EN und ES.’,
st5T:‘Barrierefreies Lernen’, st5P:‘Screenreader, Tastatur, Dunkel-Modus für alle.’,
advTitle:‘Deine Vorteile’,
av1T:‘Interaktiv’, av1P:‘Aktives Lernen.’,
av2T:‘Praxisnah’,  av2P:‘Echte Kursinhalte.’,
av3T:‘Sofortig’,   av3P:‘Zur Prüfungsvorbereitung.’,
topLabel:‘Lernbereiche’, topTitle:‘Wähle dein Thema’,
topSub:‘Jedes Thema führt dich durch 4 Level mit je 15 Fragen.’,
soon:‘Demnächst’,
backTop:‘Zurück zu Themen’, qsTitle:‘Wähle dein Level’,
backMod:‘Zurück zu Leveln’, qPill:‘Frage’,
errNoAnswer:‘Bitte wähle eine Antwort aus.’,
certLabel:‘Abschluss’, certTitle:‘Dein Zertifikat’, certSub:‘Zertifikate nach Leistung.’,
ct0T:‘Teilnahme’, ct0P:‘Unter 50%’,
ct1T:‘Bestanden’,  ct1P:‘50–74%’,
ct2T:‘Mit Auszeichnung’, ct2P:‘75–99%’,
ct3T:‘Höchstauszeichnung’, ct3P:‘100% – Perfekt!’,
premH:‘Premium Download’,
premP:‘Teilen ist kostenlos. PDF-Download nach Registrierung.’,
premBtn:‘Jetzt registrieren’,
amLabel:‘Gründerin’,
amBio:‘Gebürtige Iranerin, aufgewachsen in Deutschland, lebt heute auf Teneriffa.’,
amQuote:’„Ich habe einen HR-Kurs auf Spanisch gemacht. Wie cool wäre es, das am Handy zu lernen und direkt abgefragt zu werden. Und hier sind wir.”’,
amMiss:‘Upskill Academy macht Lernen einfacher und zugänglicher – langfristig für Kurscenter wie CEP Norte.’,
shareT:‘🎉 Ergebnis teilen’, shareCopy:‘📋 Kopieren’,
certHint:‘🔒 Registriere dich, um deine Urkunde als PDF herunterzuladen.’,
certRegBtn:‘Jetzt registrieren’,
lblCertName:‘📝 Name für die Urkunde:’, namePH:‘Vollständiger Name…’,
btnRetry:‘🔄 Nochmal’, btnDL:‘📜 Urkunde herunterladen’, btnOvr:‘🏛️ Übersicht’,
dashLabel:‘Mein Bereich’, dashTitle:‘Mein Lernfortschritt’,
dashQ:‘Quizzes’, dashC:‘Urkunden’,
dashMyCerts:‘Meine Urkunden’, noCerts:‘Noch keine Urkunden. Starte ein Quiz!’,
dashAchiev:‘Errungenschaften’, dashProg:‘Lernfortschritt’, btnLogout:‘Abmelden’,
legalLabel:‘Rechtliches’, legalTitle:‘AGB & Datenschutz’,
tabImp:‘Impressum’, tabDSde:‘Datenschutz (DE)’, tabDSes:‘Privacidad (ES)’,
footDesc:‘Interaktives Lernen für HR & Administration.’,
footNav:‘Navigation’, footLegal:‘AGB & Rechtliches’, footRights:‘Alle Rechte vorbehalten’,
authSub:‘Fortschritt speichern & Urkunden herunterladen’,
tabLogin:‘Anmelden’, tabReg:‘Registrieren’,
lEmail:‘E-Mail’, lPW:‘Passwort’, lName:‘Name’,
pwNote:‘Mindestens 8 Zeichen.’, doLogin:‘Anmelden’, doReg:‘Konto erstellen’,
orWith:‘oder’, regTerms:‘Mit der Registrierung stimmst du unserer Datenschutzerklärung zu.’,
qLabel:‘FRAGE’, qOf:‘von’, qNext:‘Weiter →’,
qRight:‘✅ Richtig!’, qWrong:‘❌ Falsch.’,
lCorr:‘Richtig’, lWrong:‘Falsch’, lPct:‘Quote’,
ranks:[‘Praktikant’,‘HR-Assistent’,‘Sachbearbeiter’,‘HR-Specialist’,‘HR-Analyst’,‘HR Business Partner’,‘HR-Manager’],
difficulties:[‘Grundlagen’,‘Aufbau’,‘Profi’,‘Experte’],
rankUp:‘🎉 Rang-Aufstieg! Du bist jetzt:’, rankNow:‘Du bist jetzt:’,
bestMed:‘Beste Medaille:’, qInfo:‘15 Fragen ·’, prevLvl:‘Vorheriges Level abschließen’,
lockedMsg:‘🔒 Schließe zuerst das vorherige Level ab!’,
noName:‘✏️ Bitte gib deinen Namen ein!’, dlOk:‘📜 Urkunde heruntergeladen!’,
resultT:[‘Versuch es nochmal 💪’,‘Bestanden! 👍’,‘Sehr gut! 👏’,‘Hervorragend! 🎉’],
ratings:[‘🌱 Anfänger (0–5 Punkte)’,‘📈 Fortgeschritten (6–10 Punkte)’,‘🏆 Profi (11–15 Punkte)’],
certTiers:[
{min:0,  max:49,  title:‘Teilnahmeurkunde’,           medal:‘📜’},
{min:50, max:74,  title:‘Urkunde – Bestanden’,        medal:‘🥉’},
{min:75, max:99,  title:‘Urkunde – Mit Auszeichnung’, medal:‘🥈’},
{min:100,max:100, title:‘Urkunde – Höchstauszeichnung’,medal:‘🏆’},
],
certHereby:‘hat erfolgreich am Quiz’,
certComp:‘der Upskill Academy teilgenommen und’,
certScored:‘der Fragen korrekt beantwortet.’,
certSign:‘Ausgestellt von’, certDate:‘Datum’,
moduleNames:[
‘Módulo 1 – Dirección Estratégica RRHH’,
‘Módulo 2 – Procesos de RRHH’,
‘Módulo 3 – Política Retributiva’,
‘Módulo 4 – PRL y Formación’,
‘Módulo 5 – Legislación Laboral’,
],
moduleShort:[‘Estrategia RRHH’,‘Procesos RRHH’,‘Retribución’,‘PRL & Formación’,‘Legislación’],
moduleDesc:[
‘Strategische HR-Ausrichtung, Wettbewerbsvorteil, Planung & Struktur.’,
‘Rekrutierung, Onboarding, Leistungsbeurteilung & Mitarbeiterentwicklung.’,
‘Gehaltsstrukturen, Anreize, variable Vergütung & Sozialleistungen.’,
‘Arbeitssicherheit, Prävention, Ausbildungsplanung & Entwicklung.’,
‘Arbeitsrecht, Tarifverträge, Kündigungsschutz & Sozialversicherung.’,
],
moduleEmoji:[‘🧭’,‘⚙️’,‘💰’,‘🦺’,‘⚖️’],
moduleAvailable:[true,false,false,false,false],
},
en: {
navHome:‘Home’, navWhat:‘About UA’, navTopics:‘Topics’,
navCert:‘Certificate’, navAbout:‘About me’, navLogin:‘Sign in’, langLabel:‘Language’,
heroBadge:‘Interactive Learning’, heroTitle:‘Academy’,
heroDesc:‘The Upskill Academy app is an interactive learning platform to master HR, payroll and more – on your smartphone.’,
heroQuiz:‘🚀 Go to Quiz’, heroMore:‘Learn more’,
featLabel:‘Why Upskill Academy?’, featTitle:‘Learning that actually works’,
featSub:‘Built for continuing education students.’,
f1T:‘Instant Feedback’,    f1P:‘After every answer you know immediately.’,
f2T:‘Learn on the go’,     f2P:‘Optimised for smartphone and tablet.’,
f3T:‘Practical’,           f3P:‘Real content from training courses.’,
f4T:‘Personal Certificate’,f4P:‘Certificate after completion.’,
s1:‘Questions · HR’, s2:‘Languages’, s3:‘Modules’, s4:‘Free to start’,
apLabel:‘The Platform’, apTitle:‘What is Upskill Academy?’, apSub:‘Interactive learning app.’,
st1T:‘Quiz-based learning’, st1P:‘Learn through targeted Q&A.’,
st2T:‘Instant feedback’,    st2P:‘Understand why an answer is right or wrong.’,
st3T:‘Level system’,        st3P:‘From basics to expert.’,
st4T:‘Three languages’,     st4P:‘DE, EN and ES.’,
st5T:‘Accessible learning’, st5P:‘Screen reader, keyboard, dark mode for everyone.’,
advTitle:‘Your benefits’,
av1T:‘Interactive’, av1P:‘Active learning.’,
av2T:‘Practical’,   av2P:‘Real course content.’,
av3T:‘Instant’,     av3P:‘Perfect for exam prep.’,
topLabel:‘Learning areas’, topTitle:‘Choose your topic’,
topSub:‘Each topic guides you through 4 levels with 15 questions each.’,
soon:‘Coming soon’,
backTop:‘Back to topics’, qsTitle:‘Choose your level’,
backMod:‘Back to levels’, qPill:‘Question’,
errNoAnswer:‘Please select an answer.’,
certLabel:‘Completion’, certTitle:‘Your Certificate’, certSub:‘Certificates graded by performance.’,
ct0T:‘Participation’,      ct0P:‘Under 50%’,
ct1T:‘Passed’,             ct1P:‘50–74%’,
ct2T:‘With Distinction’,   ct2P:‘75–99%’,
ct3T:‘Highest Distinction’,ct3P:‘100% – Perfect!’,
premH:‘Premium Download’,
premP:‘Sharing is free. PDF download after registration.’,
premBtn:‘Register now’,
amLabel:‘Founder’,
amBio:‘Born in Iran, raised in Germany, living in Tenerife.’,
amQuote:’“I did an HR training course in Spanish. How cool would it be to learn on my phone and get quizzed. And here we are.”’,
amMiss:‘Upskill Academy makes learning simpler – long-term for course centres like CEP Norte.’,
shareT:‘🎉 Share your result’, shareCopy:‘📋 Copy’,
certHint:‘🔒 Register to download your certificate as PDF.’,
certRegBtn:‘Register now’,
lblCertName:‘📝 Your name for the certificate:’, namePH:‘Full name…’,
btnRetry:‘🔄 Try again’, btnDL:‘📜 Download Certificate’, btnOvr:‘🏛️ Overview’,
dashLabel:‘My area’, dashTitle:‘My Learning Progress’,
dashQ:‘Quizzes’, dashC:‘Certs’,
dashMyCerts:‘My Certificates’, noCerts:‘No certificates yet. Start a quiz!’,
dashAchiev:‘Achievements’, dashProg:‘Learning Progress’, btnLogout:‘Sign out’,
legalLabel:‘Legal’, legalTitle:‘Terms & Privacy’,
tabImp:‘Legal Notice’, tabDSde:‘Privacy (DE)’, tabDSes:‘Privacidad (ES)’,
footDesc:‘Interactive learning for HR & Administration.’,
footNav:‘Navigation’, footLegal:‘Legal’, footRights:‘All rights reserved’,
authSub:‘Save progress & download certificates’,
tabLogin:‘Sign in’, tabReg:‘Register’,
lEmail:‘Email’, lPW:‘Password’, lName:‘Name’,
pwNote:‘At least 8 characters.’, doLogin:‘Sign in’, doReg:‘Create account’,
orWith:‘or’, regTerms:‘By registering you agree to our privacy policy.’,
qLabel:‘QUESTION’, qOf:‘of’, qNext:‘Next →’,
qRight:‘✅ Correct!’, qWrong:‘❌ Wrong.’,
lCorr:‘Correct’, lWrong:‘Wrong’, lPct:‘Score’,
ranks:[‘Intern’,‘HR Assistant’,‘Administrator’,‘HR Specialist’,‘HR Analyst’,‘HR Business Partner’,‘HR Manager’],
difficulties:[‘Fundamentals’,‘Intermediate’,‘Advanced’,‘Expert’],
rankUp:‘🎉 Rank up! You are now:’, rankNow:‘You are now:’,
bestMed:‘Best medal:’, qInfo:‘15 questions ·’, prevLvl:‘Complete previous level first’,
lockedMsg:‘🔒 Complete the previous level first!’,
noName:‘✏️ Please enter your name!’, dlOk:‘📜 Certificate downloaded!’,
resultT:[‘Try again 💪’,‘Passed! 👍’,‘Well done! 👏’,‘Outstanding! 🎉’],
ratings:[‘🌱 Beginner (0–5 pts)’,‘📈 Intermediate (6–10 pts)’,‘🏆 Pro (11–15 pts)’],
certTiers:[
{min:0,  max:49,  title:‘Certificate of Participation’,   medal:‘📜’},
{min:50, max:74,  title:‘Certificate – Passed’,           medal:‘🥉’},
{min:75, max:99,  title:‘Certificate – With Distinction’, medal:‘🥈’},
{min:100,max:100, title:‘Certificate – Highest Distinction’,medal:‘🏆’},
],
certHereby:‘has successfully participated in the quiz’,
certComp:‘of Upskill Academy and answered’,
certScored:‘questions correctly.’,
certSign:‘Issued by’, certDate:‘Date’,
moduleNames:[‘Module 1 – Strategic HR’,‘Module 2 – HR Processes’,‘Module 3 – Compensation’,‘Module 4 – OHS & Training’,‘Module 5 – Labour Law’],
moduleShort:[‘Strategic HR’,‘HR Processes’,‘Compensation’,‘OHS & Training’,‘Labour Law’],
moduleDesc:[
‘Strategic HR alignment, competitive advantage, planning & structure.’,
‘Recruitment, onboarding, performance management & development.’,
‘Salary structures, incentives, variable pay & benefits.’,
‘Occupational health, prevention, training planning & development.’,
‘Labour law, collective agreements, dismissal & social insurance.’,
],
moduleEmoji:[‘🧭’,‘⚙️’,‘💰’,‘🦺’,‘⚖️’],
moduleAvailable:[true,false,false,false,false],
},
es: {
navHome:‘Inicio’, navWhat:‘Qué es UA’, navTopics:‘Temas’,
navCert:‘Certificado’, navAbout:‘Sobre mí’, navLogin:‘Acceder’, langLabel:‘Idioma’,
heroBadge:‘Aprendizaje interactivo’, heroTitle:‘Academy’,
heroDesc:‘La app Upskill Academy es una plataforma de aprendizaje interactiva para dominar RRHH, nóminas y más – en tu smartphone.’,
heroQuiz:‘🚀 Al Quiz’, heroMore:‘Saber más’,
featLabel:’¿Por qué Upskill Academy?’, featTitle:‘Aprendizaje que funciona de verdad’,
featSub:‘Para estudiantes de cursos de formación continua.’,
f1T:‘Feedback inmediato’, f1P:‘Tras cada respuesta sabes si acertaste.’,
f2T:‘Aprende en movimiento’,f2P:‘Optimizado para smartphone y tablet.’,
f3T:‘Práctico’,            f3P:‘Contenido real de cursos.’,
f4T:‘Certificado personal’, f4P:‘Certificado al completar.’,
s1:‘Preguntas · RRHH’, s2:‘Idiomas’, s3:‘Módulos’, s4:‘Empieza gratis’,
apLabel:‘La plataforma’, apTitle:’¿Qué es Upskill Academy?’, apSub:‘App de aprendizaje interactiva.’,
st1T:‘Aprendizaje por quiz’, st1P:‘Aprende con preguntas y respuestas.’,
st2T:‘Feedback inmediato’,   st2P:‘Entiende por qué una respuesta es correcta.’,
st3T:‘Sistema de niveles’,   st3P:‘De principiante a experto.’,
st4T:‘Tres idiomas’,         st4P:‘DE, EN y ES.’,
st5T:‘Aprendizaje accesible’,st5P:‘Lector de pantalla, teclado, modo oscuro para todos.’,
advTitle:‘Tus ventajas’,
av1T:‘Interactivo’, av1P:‘Aprendizaje activo.’,
av2T:‘Práctico’,    av2P:‘Contenido real.’,
av3T:‘Inmediato’,   av3P:‘Para preparar exámenes.’,
topLabel:‘Áreas de aprendizaje’, topTitle:‘Elige tu tema’,
topSub:‘Cada tema guía por 4 niveles con 15 preguntas cada uno.’,
soon:‘Próximamente’,
backTop:‘Volver a temas’, qsTitle:‘Elige tu nivel’,
backMod:‘Volver a niveles’, qPill:‘Pregunta’,
errNoAnswer:‘Por favor, selecciona una respuesta.’,
certLabel:‘Finalización’, certTitle:‘Tu Certificado’, certSub:‘Certificados según rendimiento.’,
ct0T:‘Participación’,   ct0P:‘Menos del 50%’,
ct1T:‘Aprobado’,        ct1P:‘50–74%’,
ct2T:‘Con distinción’,  ct2P:‘75–99%’,
ct3T:‘Máxima distinción’,ct3P:‘100% – ¡Perfecto!’,
premH:‘Descarga Premium’,
premP:‘Compartir es gratis. PDF tras registro.’,
premBtn:‘Regístrate’,
amLabel:‘Fundadora’,
amBio:‘De origen iraní, criada en Alemania, vive en Tenerife.’,
amQuote:’“Hice un curso de RRHH en español. ¡Qué genial sería aprender en el móvil y que me preguntaran! Y aquí estamos.”’,
amMiss:‘Upskill Academy hace el aprendizaje más sencillo – a largo plazo para centros como CEP Norte.’,
shareT:‘🎉 Compartir resultado’, shareCopy:‘📋 Copiar’,
certHint:‘🔒 Regístrate para descargar tu diploma en PDF.’,
certRegBtn:‘Registrarse’,
lblCertName:‘📝 Tu nombre para el diploma:’, namePH:‘Nombre completo…’,
btnRetry:‘🔄 Reintentar’, btnDL:‘📜 Descargar Diploma’, btnOvr:‘🏛️ Inicio’,
dashLabel:‘Mi área’, dashTitle:‘Mi progreso’,
dashQ:‘Quizzes’, dashC:‘Diplomas’,
dashMyCerts:‘Mis Diplomas’, noCerts:‘Sin diplomas. ¡Empieza un quiz!’,
dashAchiev:‘Logros’, dashProg:‘Progreso’, btnLogout:‘Cerrar sesión’,
legalLabel:‘Legal’, legalTitle:‘AGB y Privacidad’,
tabImp:‘Aviso legal’, tabDSde:‘Datenschutz (DE)’, tabDSes:‘Privacidad (ES)’,
footDesc:‘Aprendizaje interactivo para RRHH y administración.’,
footNav:‘Navegación’, footLegal:‘Legal’, footRights:‘Todos los derechos reservados’,
authSub:‘Guarda progreso y descarga diplomas’,
tabLogin:‘Acceder’, tabReg:‘Registrarse’,
lEmail:‘Correo’, lPW:‘Contraseña’, lName:‘Nombre’,
pwNote:‘Mínimo 8 caracteres.’, doLogin:‘Acceder’, doReg:‘Crear cuenta’,
orWith:‘o’, regTerms:‘Al registrarte aceptas nuestra política de privacidad.’,
qLabel:‘PREGUNTA’, qOf:‘de’, qNext:‘Siguiente →’,
qRight:‘✅ ¡Correcto!’, qWrong:‘❌ Incorrecto.’,
lCorr:‘Correctas’, lWrong:‘Incorrectas’, lPct:‘Porcentaje’,
ranks:[‘Becario’,‘Asistente RRHH’,‘Administrativo’,‘Especialista RRHH’,‘Analista RRHH’,‘HR Business Partner’,‘HR Manager’],
difficulties:[‘Fundamentos’,‘Intermedio’,‘Avanzado’,‘Experto’],
rankUp:‘🎉 ¡Subida de rango! Ahora eres:’, rankNow:‘Ahora eres:’,
bestMed:‘Mejor medalla:’, qInfo:‘15 preguntas ·’, prevLvl:‘Completa el nivel anterior’,
lockedMsg:‘🔒 ¡Completa primero el nivel anterior!’,
noName:‘✏️ Introduce tu nombre.’, dlOk:‘📜 ¡Diploma descargado!’,
resultT:[’¡Inténtalo de nuevo! 💪’,’¡Aprobado! 👍’,’¡Muy bien! 👏’,’¡Excelente! 🎉’],
ratings:[‘🌱 Principiante (0–5 pts)’,‘📈 Intermedio (6–10 pts)’,‘🏆 Profesional (11–15 pts)’],
certTiers:[
{min:0,  max:49,  title:‘Certificado de Participación’, medal:‘📜’},
{min:50, max:74,  title:‘Certificado – Aprobado’,       medal:‘🥉’},
{min:75, max:99,  title:‘Certificado – Con distinción’, medal:‘🥈’},
{min:100,max:100, title:‘Certificado – Máxima distinción’,medal:‘🏆’},
],
certHereby:‘ha participado exitosamente en el quiz’,
certComp:‘de Upskill Academy y ha respondido’,
certScored:‘de las preguntas correctamente.’,
certSign:‘Emitido por’, certDate:‘Fecha’,
moduleNames:[‘Módulo 1 – Dirección Estratégica RRHH’,‘Módulo 2 – Procesos de RRHH’,‘Módulo 3 – Política Retributiva’,‘Módulo 4 – PRL y Formación’,‘Módulo 5 – Legislación Laboral’],
moduleShort:[‘Estrategia RRHH’,‘Procesos RRHH’,‘Retribución’,‘PRL & Formación’,‘Legislación’],
moduleDesc:[
‘Dirección estratégica, ventaja competitiva, planificación y estructura.’,
‘Reclutamiento, onboarding, evaluación del desempeño y desarrollo.’,
‘Estructuras salariales, incentivos, retribución variable y beneficios.’,
‘Seguridad laboral, prevención, planificación formativa y desarrollo.’,
‘Derecho laboral, convenios, despido y seguridad social.’,
],
moduleEmoji:[‘🧭’,‘⚙️’,‘💰’,‘🦺’,‘⚖️’],
moduleAvailable:[true,false,false,false,false],
},
};

/* ============================================================
SECTION 2 – QUESTION DATABASE (Module 0, 4 levels × 15 Qs)
Weitere Module werden als locked angezeigt (coming soon)
============================================================ */
const QDB = {
0: [
/* ── Level 0: Grundlagen ── */
[
{q:’¿Qué es la Dirección Estratégica de RRHH?’,a:[‘Solo administrar nóminas’,‘Integrar la gestión de personas en la estrategia empresarial’,‘Contratar personal temporal’,‘Gestionar solo ausencias’],correct:1,exp:‘La Dirección Estratégica integra la gestión de personas en el núcleo de la estrategia corporativa.’},
{q:’¿De dónde surge la estrategia de RRHH?’,a:[‘Del deseo del director’,‘De la estrategia corporativa’,‘De la ley’,‘Del mercado externo’],correct:1,exp:‘La estrategia de RRHH deriva directamente de la estrategia corporativa.’},
{q:’¿Qué caracteriza la Etapa 1 (Administración de Personal)?’,a:[‘Es proactiva’,‘Es reactiva y solo gestiona contratos/nóminas’,‘Planifica talento’,‘Usa People Analytics’],correct:1,exp:‘La Etapa 1 es reactiva: solo gestiona contratos y nóminas sin anticiparse.’},
{q:’¿Qué significa “reactivo” en RRHH?’,a:[‘Actuar antes del problema’,‘Actuar solo cuando ya existe un problema’,‘Planificar a largo plazo’,‘Usar datos para decidir’],correct:1,exp:‘Reactivo significa actuar solo cuando el problema ya ha ocurrido.’},
{q:’¿Qué ejemplo describe RRHH en Etapa 1?’,a:[‘People Analytics’,‘Buscar sustituto cuando alguien ya se ha ido’,‘Plan de sucesión’,‘Encuesta de clima’],correct:1,exp:‘En Etapa 1 RRHH solo busca sustituto cuando el empleado ya se ha marchado.’},
{q:’¿Qué aporta la Etapa 2 frente a la Etapa 1?’,a:[‘Solo burocracia’,‘Funciones especializadas: selección, formación, motivación’,‘Integración estratégica completa’,‘Automatización total’],correct:1,exp:‘En Etapa 2 aparecen funciones especializadas aunque sin participación estratégica.’},
{q:’¿Qué caracteriza la Etapa 3?’,a:[‘Solo administrativo’,‘RRHH es departamento clave para el futuro’,‘Solo trabaja con sindicatos’,‘Gestiona solo nóminas’],correct:1,exp:‘En Etapa 3 RRHH es proactivo, analítico y participa en la dirección de la empresa.’},
{q:’¿Qué tecnologías aceleran el RRHH estratégico?’,a:[‘Fax e impresoras’,‘Digitalización, teletrabajo, automatización e IA’,‘Solo redes sociales’,‘Solo almacenamiento en nube’],correct:1,exp:‘La digitalización, teletrabajo, automatización e IA impulsan el RRHH estratégico.’},
{q:’¿Qué es People Analytics?’,a:[‘Software de nóminas’,‘Análisis de datos de personas para tomar decisiones’,‘Proceso de reclutamiento’,‘Método de teambuilding’],correct:1,exp:‘People Analytics analiza datos de personas como si fuera finanzas o marketing.’},
{q:‘Ante una expansión internacional, ¿qué debe prever RRHH?’,a:[‘Solo material de oficina’,‘Perfiles con idiomas, competencias interculturales y movilidad’,‘Despedir empleados’,‘Solo ajustar salarios’],correct:1,exp:‘RRHH debe anticipar idiomas, competencias interculturales y políticas de movilidad.’},
{q:’¿Cuál es el objetivo principal de la Dirección Estratégica de RRHH?’,a:[‘Reducir costes al mínimo’,‘Alinear las personas con los objetivos estratégicos’,‘Gestionar solo bajas laborales’,‘Controlar asistencia’],correct:1,exp:‘El objetivo central es alinear la gestión de personas con los objetivos estratégicos.’},
{q:’¿Qué diferencia a un HRBP de un generalista?’,a:[‘El HRBP solo hace nóminas’,‘El HRBP actúa como consultor estratégico de una unidad de negocio’,‘No hay diferencia’,‘El HRBP gestiona solo selección’],correct:1,exp:‘El HRBP (HR Business Partner) asesora estratégicamente a una unidad de negocio concreta.’},
{q:’¿Qué es el “capital humano”?’,a:[‘El dinero de RRHH’,‘El valor económico de competencias y experiencias de las personas’,‘El número de empleados’,‘El presupuesto de formación’],correct:1,exp:‘El capital humano es el valor económico derivado de competencias, habilidades y experiencias.’},
{q:’¿Qué es la planificación estratégica de RRHH?’,a:[‘Reaccionar a vacantes’,‘Anticipar qué personas necesitará la empresa para alcanzar sus objetivos’,‘Gestionar solo nóminas’,‘Contratar sin planificar’],correct:1,exp:‘Consiste en anticipar, preparar y alinear las necesidades de personas con la estrategia.’},
{q:’¿Qué es la ventaja competitiva en RRHH?’,a:[‘Pagar salarios bajos’,‘Superar permanentemente a competidores gracias a las personas’,‘Más publicidad’,‘Más tecnología’],correct:1,exp:‘La ventaja competitiva proviene de personas difíciles de imitar, bien organizadas y sostenibles.’},
],
/* ── Level 1: Aufbau ── */
[
{q:’¿Cuáles son las tres condiciones para que las personas sean ventaja competitiva?’,a:[‘Baratas, jóvenes y flexibles’,‘Difíciles de imitar, organizadas con valor y sostenibles’,‘Solo titulación alta’,‘Hacer siempre horas extra’],correct:1,exp:‘Las personas crean ventaja si son difíciles de imitar, generan valor y son sostenibles.’},
{q:’¿Qué es el upskilling?’,a:[‘Despedir y sustituir’,‘Mejorar competencias existentes para el puesto actual’,‘Cambiar de rol completamente’,‘Solo formación externa’],correct:1,exp:‘Upskilling consiste en mejorar habilidades actuales para desempeñar mejor el mismo puesto.’},
{q:’¿Qué es el reskilling?’,a:[‘Mismo trabajo con nuevas herramientas’,‘Aprender competencias nuevas para cambiar de rol’,‘Prepararse para la jubilación’,‘Desarrollar liderazgo’],correct:1,exp:‘Reskilling es aprender competencias completamente nuevas para asumir un rol diferente.’},
{q:’¿Cómo actúa RRHH en una empresa orientada a la innovación?’,a:[‘Control estricto’,‘Fomenta creatividad, tolerancia al error y trabajo en equipo’,‘Reduce costes’,‘Refuerza jerarquías’],correct:1,exp:‘En empresas innovadoras RRHH fomenta creatividad, espacios creativos y reconocimiento de ideas.’},
{q:’¿Qué ocurre si RRHH no crea ventaja competitiva?’,a:[‘Todo va mejor’,‘Alta rotación, mal clima y dificultad para atraer talento’,‘Más motivación’,‘Más productividad’],correct:1,exp:‘Sin RRHH estratégico: alta rotación, mal clima, escasez de talento.’},
{q:’¿Por qué las personas son más difíciles de copiar que la tecnología?’,a:[‘Son más baratas’,‘La combinación única de talento, cultura y procesos no se puede replicar’,‘No existe tecnología’,‘La ley lo prohíbe’],correct:1,exp:‘La combinación única de personas, cultura, liderazgo y procesos es prácticamente imposible de copiar.’},
{q:’¿Qué hace RRHH en una empresa orientada al cliente?’,a:[‘Solo contratar técnicos’,‘Selecciona personas con habilidades sociales y crea incentivos ligados al cliente’,‘Solo política salarial’,‘Solo eficiencia’],correct:1,exp:‘RRHH selecciona personas con competencias sociales y vincula incentivos a la satisfacción del cliente.’},
{q:’¿Cuál es la función de RRHH respecto al liderazgo?’,a:[‘Retirar líderes’,‘Formar en comunicación, motivación y gestión de conflictos’,‘Solo pedir aumentos’,‘Ignorarlos’],correct:1,exp:‘RRHH forma a los líderes en comunicación, motivación y resolución de conflictos.’},
{q:’¿Qué son los sistemas de compensación y reconocimiento?’,a:[‘Solo salario base’,‘Salarios, incentivos y beneficios para atraer, retener y motivar talento’,‘Solo bonos’,‘Solo medidas disciplinarias’],correct:1,exp:‘Incluyen salarios, incentivos y beneficios diseñados para atraer y retener el talento.’},
{q:’¿Qué diferencia cuantitativa y cualitativa en la planificación de personal?’,a:[‘Cuantitativa=salarios; Cualitativa=competencias’,‘Cuantitativa=¿cuántos?; Cualitativa=¿qué perfiles?’,‘Interna vs externa’,‘Sin diferencia’],correct:1,exp:‘La planificación cuantitativa dice cuántos y la cualitativa qué perfiles o competencias.’},
{q:’¿Qué analiza RRHH en una auditoría interna?’,a:[‘Solo la competencia’,‘Plantilla actual, competencias, clima y procesos de RRHH’,‘Solo finanzas’,‘Solo salarios’],correct:1,exp:‘La auditoría interna analiza plantilla, competencias, clima y eficiencia de los procesos de RRHH.’},
{q:’¿Qué contiene un análisis DAFO para RRHH?’,a:[‘Solo fortalezas’,‘Fortalezas, Debilidades, Oportunidades y Amenazas del área de RRHH’,‘Solo análisis externo’,‘Solo datos de satisfacción’],correct:1,exp:‘El DAFO en RRHH analiza las cuatro dimensiones para orientar la estrategia.’},
{q:’¿Cuáles son los KPIs típicos de RRHH?’,a:[‘Precio de la acción’,‘Rotación, absentismo, horas de formación, satisfacción’,‘Solo ventas’,‘Solo valoraciones’],correct:1,exp:‘KPIs clave: rotación, absentismo, duración de vacantes, horas de formación, índice de satisfacción.’},
{q:’¿Cuál es el riesgo si RRHH no tiene objetivos claros?’,a:[‘Todo va mejor’,‘Acciones sin valor, dinero sin retorno, errores repetidos’,‘Empleados más autónomos’,‘Costes reducidos’],correct:1,exp:‘Sin objetivos claros RRHH actúa sin propósito, desperdicia recursos y repite errores.’},
{q:’¿Qué significa interpretar indicadores de RRHH en lugar de solo observarlos?’,a:[‘Ver números y continuar’,‘Comparar, hacer preguntas críticas y buscar causas raíz’,‘Pasar datos a consultores’,‘Medir solo anualmente’],correct:1,exp:‘Interpretar implica comparar con objetivos, cuestionar y encontrar causas raíz.’},
],
/* ── Level 2: Profi ── */
[
{q:’¿Qué significa ser “agente de transformación” en RRHH?’,a:[‘Solo gestionar estructuras’,‘Impulsar cambios, acompañar personas y reducir resistencias’,‘Sustituir empleados’,‘Solo contratar consultores’],correct:1,exp:‘Como agente de transformación RRHH impulsa el cambio y acompaña a las personas.’},
{q:’¿Qué hace RRHH en una transformación digital?’,a:[‘Solo comprar software’,‘Identifica brechas de competencias, diseña formación digital y acompaña’,‘Sustituir todo por robots’,‘Solo coordinar IT’],correct:1,exp:‘RRHH identifica brechas, diseña formación digital y acompaña a quienes más lo necesitan.’},
{q:’¿Cuáles son los 6 objetivos principales de la gestión de RRHH?’,a:[‘Solo reducir costes’,‘Atraer, desarrollar, retener, motivar, entorno seguro y alinear desempeño’,‘Solo nóminas’,‘Solo leyes’],correct:1,exp:‘Los 6 objetivos: atraer, desarrollar, retener, motivar, entorno seguro y alinear el desempeño.’},
{q:’¿Cuál es la diferencia entre objetivos estratégicos, tácticos y operativos?’,a:[‘Son iguales’,‘Estratégico=largo plazo; Táctico=medio; Operativo=corto plazo’,‘Operativo es más largo’,‘Táctico=+5 años’],correct:1,exp:‘Estratégico (años) → Táctico (1-2 años) → Operativo (meses, acciones concretas).’},
{q:’¿Qué indica una alta rotación voluntaria?’,a:[‘La empresa es atractiva’,‘Problemas de clima, liderazgo, salario u oportunidades’,‘Empleados jubilándose’,‘Empresa creciendo’],correct:1,exp:‘Alta rotación voluntaria señala problemas: mal clima, liderazgo débil, salario bajo o falta de desarrollo.’},
{q:’¿Cómo conecta una mejor selección con los resultados empresariales?’,a:[‘No hay relación’,‘Mejor selección → mejor servicio → clientes satisfechos → más ventas’,‘Solo salarios más altos’,‘Publicidad innecesaria’],correct:1,exp:‘La cadena: mejor selección → calidad → satisfacción del cliente → ventas → ventaja competitiva.’},
{q:’¿Cuál es la función del área de Prevención de Riesgos Laborales?’,a:[‘Solo administrativo’,‘Evaluar riesgos, proponer prevención, impartir formación e investigar accidentes’,‘Solo nóminas’,‘Solo auditorías’],correct:1,exp:‘PRL evalúa riesgos, propone medidas, organiza formación e investiga accidentes.’},
{q:’¿Qué abarca Diversidad e Inclusión en RRHH?’,a:[‘Solo contratar mujeres’,‘Políticas de igualdad, sensibilización y procesos libres de discriminación’,‘Solo cuotas’,‘Solo edad’],correct:1,exp:‘D&I diseña políticas de igualdad, sensibiliza a la plantilla y elimina discriminación en los procesos.’},
{q:’¿Qué hace el área de Selección y Reclutamiento?’,a:[‘Solo negociación salarial’,‘Define perfil, publica, filtra, entrevista y gestiona onboarding’,‘Solo formación’,‘Solo trámites’],correct:1,exp:‘Reclutamiento abarca desde definir el perfil hasta acompañar el onboarding del nuevo empleado.’},
{q:’¿Qué hace un People Analyst?’,a:[‘Organiza teambuilding’,‘Analiza datos de RRHH para apoyar decisiones basadas en evidencia’,‘Negocia convenios’,‘Solo publica ofertas’],correct:1,exp:‘El People Analyst trabaja con datos de RRHH para tomar decisiones basadas en evidencia.’},
{q:’¿Cómo difiere la estructura de RRHH en una gran empresa vs. PYME?’,a:[‘Las grandes tienen menos RRHH’,‘Las grandes tienen departamentos especializados; las PYMES, 1-3 personas para todo’,‘Las PYMES siempre externalizan’,‘Sin diferencia’],correct:1,exp:‘Gran empresa: departamentos especializados. PYME: 1-3 personas cubren todas las funciones.’},
{q:’¿Qué es el employer branding?’,a:[‘Publicidad de productos’,‘La imagen de la empresa como empleador para atraer y retener talento’,‘La marca del CEO’,‘El logo’],correct:1,exp:‘El employer branding construye la reputación de la empresa como empleador deseable.’},
{q:’¿Qué es la evaluación del desempeño?’,a:[‘Controlar asistencia’,‘Proceso sistemático para valorar contribuciones y fijar objetivos’,‘Solo calcular bonus’,‘Revisar expedientes’],correct:1,exp:‘La evaluación del desempeño valora contribuciones y establece objetivos de mejora.’},
{q:’¿Qué es la gestión del talento?’,a:[‘Solo contratar a los mejores’,‘Identificar, desarrollar y retener a personas clave para el futuro’,‘Solo dar formación’,‘Gestionar currículums’],correct:1,exp:‘La gestión del talento identifica, desarrolla y retiene personas clave para el futuro.’},
{q:’¿Qué es la gestión del cambio en RRHH?’,a:[‘Cambiar de empresa’,‘Proceso de planificación y acompañamiento de transformaciones organizativas’,‘Solo comunicar cambios’,‘Despedir al personal antiguo’],correct:1,exp:‘La gestión del cambio planifica, comunica y acompaña las transformaciones organizativas.’},
],
/* ── Level 3: Experte ── */
[
{q:’¿Qué es la planificación de la sucesión?’,a:[‘Contratar cuando hay vacante’,‘Identificar y preparar candidatos internos para roles clave con antelación’,‘Despedir a directivos’,‘Solo hacer organigramas’],correct:1,exp:‘La planificación de la sucesión prepara candidatos internos para roles clave antes de que surja la necesidad.’},
{q:’¿Qué es el employee journey map?’,a:[‘Un mapa de la oficina’,‘Representación visual de todas las experiencias del empleado’,‘Un plano de evacuación’,‘El organigrama’],correct:1,exp:‘El employee journey map visualiza todas las etapas de la experiencia del empleado.’},
{q:’¿Qué es el modelo de las 9-Box Grid?’,a:[‘Un sistema de nóminas’,‘Herramienta para evaluar desempeño y potencial de los empleados’,‘Un tipo de organigrama’,‘Un método de selección’],correct:1,exp:‘La 9-Box Grid evalúa a los empleados según desempeño y potencial para gestionar talento.’},
{q:’¿Qué es el índice de rotación y cómo se calcula?’,a:[‘Número total de empleados’,’(Bajas / Plantilla media) × 100’,‘Solo el número de despidos’,‘El coste de formación’],correct:1,exp:‘Rotación = (Nº de bajas / Plantilla media) × 100. Mide la estabilidad de la plantilla.’},
{q:’¿Qué factores determinan el clima organizacional?’,a:[‘Solo el salario’,‘Liderazgo, comunicación, condiciones, reconocimiento y trabajo en equipo’,‘Solo el espacio físico’,‘Solo la jornada’],correct:1,exp:‘El clima depende de liderazgo, comunicación, condiciones, reconocimiento y cohesión del equipo.’},
{q:’¿Qué es la cultura organizacional y quién la gestiona?’,a:[‘Solo el CEO la define’,‘Conjunto de valores y comportamientos compartidos; RRHH la impulsa y cuida’,‘Solo marketing’,‘No se puede gestionar’],correct:1,exp:‘La cultura es el conjunto de valores y comportamientos compartidos; RRHH la impulsa activamente.’},
{q:’¿Cómo impacta el liderazgo transformacional en RRHH?’,a:[‘Solo aumenta salarios’,‘Inspira, motiva y desarrolla al equipo para lograr cambios profundos’,‘Controla solo resultados’,‘Reduce la formación’],correct:1,exp:‘El liderazgo transformacional inspira y desarrolla a las personas para lograr cambios profundos.’},
{q:’¿Qué es el análisis de brechas de competencias?’,a:[‘Revisar los títulos’,‘Comparar las competencias actuales con las necesarias para alcanzar los objetivos’,‘Calcular sueldos’,‘Revisar contratos’],correct:1,exp:‘El análisis de brechas compara competencias actuales con las requeridas para los objetivos futuros.’},
{q:’¿Qué indica un eNPS (Employee Net Promoter Score) alto?’,a:[‘Alta rotación’,‘Alto compromiso y satisfacción: los empleados recomendarían la empresa’,‘Muchas ausencias’,‘Bajo rendimiento’],correct:1,exp:‘Un eNPS alto indica empleados comprometidos que recomendarían la empresa como lugar de trabajo.’},
{q:’¿Qué son las políticas de RRHH?’,a:[‘Contratos laborales’,‘Directrices formales que guían decisiones en la gestión de personas’,‘Solo el código ético’,‘Los organigramas’],correct:1,exp:‘Las políticas de RRHH son directrices formales que orientan decisiones sobre la gestión de personas.’},
{q:’¿Qué es el outsourcing de RRHH y cuándo se usa?’,a:[‘Contratar empleados temporales’,‘Externalizar funciones de RRHH a empresas especializadas para ganar eficiencia’,‘Despedir al equipo de RRHH’,‘Solo para las nóminas’],correct:1,exp:‘El outsourcing de RRHH externaliza funciones específicas para ganar eficiencia y acceder a especialistas.’},
{q:’¿Qué es la diversidad cognitiva y por qué importa?’,a:[‘Contratar personas de distintos países’,‘Variedad en formas de pensar y resolver problemas: mejora la innovación’,‘Tener distintas edades’,‘Mezclar géneros’],correct:1,exp:‘La diversidad cognitiva aporta distintas formas de pensar y resolver problemas, impulsando la innovación.’},
{q:’¿Qué es el bienestar organizacional?’,a:[‘Solo gimnasio en la oficina’,‘Conjunto de iniciativas para mejorar la salud física, mental y social de los empleados’,‘Solo jornada reducida’,‘Solo seguro médico’],correct:1,exp:‘El bienestar organizacional abarca iniciativas físicas, mentales y sociales para cuidar a las personas.’},
{q:’¿Cómo se mide el ROI de la formación?’,a:[‘Contando participantes’,’(Beneficio obtenido - Coste de formación) / Coste × 100’,‘Solo con encuestas’,‘No se puede medir’],correct:1,exp:‘El ROI de formación mide el retorno económico: (beneficio − coste) / coste × 100.’},
{q:’¿Qué es la gestión por competencias?’,a:[‘Pagar según titulación’,‘Modelo que basa selección, evaluación y desarrollo en competencias clave para el negocio’,‘Controlar solo resultados’,‘Solo dar cursos’],correct:1,exp:‘La gestión por competencias alinea selección, evaluación y desarrollo con competencias clave del negocio.’},
],
],
};

/* ============================================================
SECTION 3 – APP STATE
============================================================ */
let lang = ‘de’;
let currentUser = null;

/** Quiz state */
const qs = {
moduleId: null,
levelId: null,
currentQ: 0,
score: 0,
answered: false,
shuffled: [],
unlockedLevels: { 0: [0] },   // moduleId → [unlockedLevelIds]
completedLevels: {},            // “moduleId-levelId” → starsEarned
currentRank: 0,
lastPct: 0,
};

const RANK_ICONS = [‘🎓’,‘📋’,‘🗂️’,‘👔’,‘📊’,‘🤝’,‘🏆’];
const LEVEL_META = [
{ medal:‘🥉’, rankUnlock:1 },
{ medal:‘🥈’, rankUnlock:3 },
{ medal:‘🥇’, rankUnlock:5 },
{ medal:‘🏆’, rankUnlock:6 },
];
const ACHIEVEMENTS = [
{ id:‘first’,   icon:‘🎯’, name:‘Erster Quiz’  },
{ id:‘perfect’, icon:‘💯’, name:‘Perfekt’       },
{ id:‘three’,   icon:‘🔥’, name:‘3 Module’      },
{ id:‘top’,     icon:‘🏆’, name:‘HR Manager’    },
{ id:‘sharer’,  icon:‘📢’, name:‘Teiler’        },
];

/* ============================================================
SECTION 4 – INITIALISATION
Warte auf DOMContentLoaded, dann starte die App
============================================================ */
document.addEventListener(‘DOMContentLoaded’, function () {
loadLocalState();
applyLang(‘de’);
renderTopics();
document.getElementById(‘foot-year’).textContent = new Date().getFullYear();

// Scroll-Shadow für Nav
window.addEventListener(‘scroll’, function () {
document.getElementById(‘main-nav’).classList.toggle(‘scrolled’, window.scrollY > 10);
});

// Modal schließen bei Klick auf Overlay
document.getElementById(‘auth-modal’).addEventListener(‘click’, function (e) {
if (e.target === this) closeAuth();
});

// Escape-Taste schließt Drawer und Modal
document.addEventListener(‘keydown’, function (e) {
if (e.key === ‘Escape’) { closeAuth(); closeDrawer(); }
});
});

/* ============================================================
SECTION 5 – LANGUAGE
============================================================ */
function t(key) {
return (TR[lang] && TR[lang][key] !== undefined) ? TR[lang][key]
: (TR[‘de’][key] !== undefined ? TR[‘de’][key] : key);
}

function setLang(l) {
lang = l;
applyLang(l);
}

function applyLang(l) {
lang = l;
document.documentElement.lang = l;

// Sprachbuttons: Desktop + Drawer
[‘de’,‘en’,‘es’].forEach(function (x) {
[‘btn-’+x, ‘d-btn-’+x].forEach(function (id) {
var el = document.getElementById(id);
if (!el) return;
el.classList.toggle(‘active’, x === l);
el.setAttribute(‘aria-pressed’, String(x === l));
});
});

// Alle data-i18n Elemente aktualisieren
document.querySelectorAll(’[data-i18n]’).forEach(function (el) {
var key = el.getAttribute(‘data-i18n’);
if (TR[l] && TR[l][key] !== undefined) el.textContent = TR[l][key];
});

// Dynamische Felder die keinen data-i18n Attribute haben
var fields = {
‘lbl-cert-name’: { prop: ‘textContent’, key: ‘lblCertName’ },
‘cert-name’:     { prop: ‘placeholder’,  key: ‘namePH’     },
‘next-btn’:      { prop: ‘textContent’, key: ‘qNext’       },
‘lbl-cor’:       { prop: ‘textContent’, key: ‘lCorr’       },
‘lbl-wr’:        { prop: ‘textContent’, key: ‘lWrong’      },
‘lbl-pct’:       { prop: ‘textContent’, key: ‘lPct’        },
};
Object.keys(fields).forEach(function (id) {
var el = document.getElementById(id);
if (!el) return;
var f = fields[id];
el[f.prop] = t(f.key);
});

// Render-abhängige Bereiche neu aufbauen
renderTopics();
renderRankLadder();
renderLevelGrid();
updateAuthUI();
}

/* ============================================================
SECTION 6 – NAVIGATION
============================================================ */
function showPage(id) {
document.querySelectorAll(’.page’).forEach(function (p) {
p.classList.remove(‘active’);
});
var page = document.getElementById(‘page-’ + id);
if (page) page.classList.add(‘active’);

// Nav-Links aktiv setzen
document.querySelectorAll(’[data-page]’).forEach(function (el) {
el.classList.toggle(‘active’, el.getAttribute(‘data-page’) === id);
});

// Fokus auf Hauptinhalt setzen (Accessibility)
var main = document.getElementById(‘main-content’);
if (main) main.focus();

window.scrollTo(0, 0);

// Seiten-spezifische Aktionen
if (id === ‘quiz-select’) { renderRankLadder(); renderLevelGrid(); }
if (id === ‘dashboard’)   { renderDashboard(); }
if (id === ‘topics’)      { renderTopics(); }
}

function goHome() {
showPage(‘home’);
}

/* ── Drawer (Mobile) ── */
function openDrawer() {
document.getElementById(‘mobile-drawer’).classList.add(‘open’);
document.getElementById(‘drawer-overlay’).classList.add(‘open’);
document.getElementById(‘ham-btn’).setAttribute(‘aria-expanded’, ‘true’);
}

function closeDrawer() {
document.getElementById(‘mobile-drawer’).classList.remove(‘open’);
document.getElementById(‘drawer-overlay’).classList.remove(‘open’);
var btn = document.getElementById(‘ham-btn’);
if (btn) btn.setAttribute(‘aria-expanded’, ‘false’);
}

/* ── Legal Tabs ── */
function showLegal(tab) {
[‘imp’,‘dsde’,‘dses’].forEach(function (id) {
var el = document.getElementById(‘legal-’ + id);
if (el) el.style.display = (id === tab) ? ‘block’ : ‘none’;
});
document.querySelectorAll(’.legal-tab’).forEach(function (btn, i) {
var tabs = [‘imp’,‘dsde’,‘dses’];
btn.classList.toggle(‘active’, tabs[i] === tab);
btn.setAttribute(‘aria-selected’, String(tabs[i] === tab));
});
}

/* ============================================================
SECTION 7 – ACCESSIBILITY TOOLBAR
============================================================ */
function setFontSize(size) {
document.body.classList.remove(‘fs-lg’,‘fs-xl’);
if (size !== ‘normal’) document.body.classList.add(‘fs-’ + size);
}

function toggleTheme() {
var isDark = document.documentElement.getAttribute(‘data-theme’) === ‘dark’;
document.documentElement.setAttribute(‘data-theme’, isDark ? ‘light’ : ‘dark’);
showToast(isDark ? ‘☀️ Hellmodus’ : ‘🌙 Dunkel-Modus’);
}

function toggleContrast() {
document.body.classList.toggle(‘high-contrast’);
var on = document.body.classList.contains(‘high-contrast’);
if (on) {
document.documentElement.style.setProperty(’–text’,       ‘#000’);
document.documentElement.style.setProperty(’–text-muted’, ‘#111’);
document.documentElement.style.setProperty(’–border’,     ‘#333’);
} else {
document.documentElement.style.removeProperty(’–text’);
document.documentElement.style.removeProperty(’–text-muted’);
document.documentElement.style.removeProperty(’–border’);
}
showToast(on ? ‘◑ Hoher Kontrast an’ : ‘◑ Hoher Kontrast aus’);
}

function toggleLineHeight() {
document.body.classList.toggle(‘line-height-lg’);
showToast(‘↕ Zeilenabstand geändert’);
}

function resetA11y() {
document.body.className = ‘’;
document.documentElement.removeAttribute(‘data-theme’);
[’–text’,’–text-muted’,’–border’].forEach(function (p) {
document.documentElement.style.removeProperty(p);
});
showToast(‘✕ Einstellungen zurückgesetzt’);
}

/* ============================================================
SECTION 8 – AUTH (Login / Register / Logout)
============================================================ */
function openAuth() {
document.getElementById(‘auth-modal’).classList.add(‘open’);
}

function closeAuth() {
document.getElementById(‘auth-modal’).classList.remove(‘open’);
}

function switchTab(tab) {
document.getElementById(‘form-login’).style.display    = (tab === ‘login’)    ? ‘flex’ : ‘none’;
document.getElementById(‘form-register’).style.display = (tab === ‘register’) ? ‘flex’ : ‘none’;

document.querySelectorAll(’.modal-tab’).forEach(function (btn, i) {
var active = (i === 0 && tab === ‘login’) || (i === 1 && tab === ‘register’);
btn.classList.toggle(‘active’, active);
btn.setAttribute(‘aria-selected’, String(active));
});
}

function doLogin(event) {
if (event) event.preventDefault();
var email = document.getElementById(‘li-email’).value.trim();
var pw    = document.getElementById(‘li-pw’).value;
if (!email || !pw) { showToast(‘⚠️ Alle Felder ausfüllen’); return; }

var stored = localStorage.getItem(‘ua_acc_’ + email);
if (!stored) { showToast(‘⚠️ Kein Konto gefunden. Bitte registrieren.’); return; }

var acc = JSON.parse(stored);
currentUser = { name: acc.name, email: acc.email, certs: acc.certs || [], xp: acc.xp || 0, achievements: acc.achievements || [] };
localStorage.setItem(‘ua_user’, JSON.stringify(currentUser));
updateAuthUI();
closeAuth();
showToast(’👋 Willkommen, ’ + currentUser.name + ‘!’);
}

function doRegister(event) {
if (event) event.preventDefault();
var name  = document.getElementById(‘rg-name’).value.trim();
var email = document.getElementById(‘rg-email’).value.trim();
var pw    = document.getElementById(‘rg-pw’).value;
if (!name || !email || !pw) { showToast(‘⚠️ Alle Felder ausfüllen’); return; }
if (pw.length < 8) { showToast(‘⚠️ Passwort min. 8 Zeichen’); return; }

currentUser = { name: name, email: email, certs: [], xp: 0, achievements: [] };
localStorage.setItem(‘ua_acc_’ + email, JSON.stringify(currentUser));
localStorage.setItem(‘ua_user’, JSON.stringify(currentUser));
updateAuthUI();
closeAuth();
showToast(’🎉 Konto erstellt! Willkommen, ’ + name + ‘!’);
spawnConfetti();
}

function logout() {
currentUser = null;
localStorage.removeItem(‘ua_user’);
updateAuthUI();
showPage(‘home’);
showToast(‘👋 Abgemeldet.’);
}

function updateAuthUI() {
var btn      = document.getElementById(‘nav-auth-btn’);
var drawerBtn = document.getElementById(‘drawer-auth-btn’);
var certWrap  = document.getElementById(‘cert-name-wrap’);
var certHint  = document.getElementById(‘cert-login-hint’);
var btnDl     = document.getElementById(‘btn-dl’);

if (currentUser) {
var label = ‘👤 ’ + currentUser.name.split(’ ’)[0];
if (btn)       { btn.textContent = label;       btn.onclick = function () { showPage(‘dashboard’); }; }
if (drawerBtn) { drawerBtn.textContent = label; drawerBtn.onclick = function () { showPage(‘dashboard’); closeDrawer(); }; }
} else {
if (btn)       { btn.textContent = t(‘navLogin’);       btn.onclick = openAuth; }
if (drawerBtn) { drawerBtn.textContent = t(‘navLogin’); drawerBtn.onclick = function () { openAuth(); closeDrawer(); }; }
}

if (certWrap) certWrap.style.display = currentUser ? ‘block’ : ‘none’;
if (certHint) certHint.style.display = currentUser ? ‘none’  : ‘block’;
if (btnDl)    btnDl.style.display    = currentUser ? ‘inline-flex’ : ‘none’;
}

/* ============================================================
SECTION 9 – TOPICS & LEVEL GRID (UI Rendering)
============================================================ */
function renderTopics() {
var grid = document.getElementById(‘topic-grid’);
if (!grid) return;

var names     = t(‘moduleNames’);
var descs     = t(‘moduleDesc’);
var emojis    = t(‘moduleEmoji’);
var available = t(‘moduleAvailable’);

grid.innerHTML = ‘’;

for (var i = 0; i < names.length; i++) {
(function (idx) {
var isAvailable = available[idx];
var card = document.createElement(‘article’);
card.className = ‘topic-card’ + (isAvailable ? ‘’ : ’ locked’);
card.setAttribute(‘role’, ‘listitem’);
card.setAttribute(‘tabindex’, ‘0’);
card.setAttribute(‘aria-label’, names[idx] + (isAvailable ? ‘’ : ’ – ’ + t(‘soon’)));

```
  if (isAvailable) {
    card.onclick = function () { startModule(idx); };
    card.onkeypress = function (e) { if (e.key === 'Enter') startModule(idx); };
  } else {
    card.onclick = function () { showToast(t('soon') + ' 🔜'); };
  }

  var metaHtml = isAvailable
    ? '<div class="topic-meta">4 Level · 15 ' + t('qPill') + 'en · ✅</div>'
    : '<span class="badge-soon">' + t('soon') + '</span>';

  card.innerHTML =
    '<div class="topic-icon-wrap" aria-hidden="true">' + emojis[idx] + '</div>' +
    '<h3>' + names[idx] + '</h3>' +
    '<p>' + descs[idx] + '</p>' +
    metaHtml;

  grid.appendChild(card);
})(i);
```

}
}

function startModule(moduleId) {
qs.moduleId = moduleId;
// Label des gewählten Moduls setzen
var label = document.getElementById(‘module-label-select’);
if (label) label.textContent = t(‘moduleNames’)[moduleId] || ‘’;
showPage(‘quiz-select’);
}

/* ── Rank Ladder ── */
function renderRankLadder() {
var el = document.getElementById(‘rank-ladder’);
if (!el) return;

var ranks = t(‘ranks’);
el.innerHTML = ‘’;

ranks.forEach(function (r, i) {
if (i > 0) {
var conn = document.createElement(‘div’);
conn.className = ‘rank-conn’ + (i <= qs.currentRank ? ’ filled’ : ‘’);
el.appendChild(conn);
}
var step = document.createElement(‘div’);
step.className = ‘rank-step’ + (i < qs.currentRank ? ’ unlocked’ : ‘’) + (i === qs.currentRank ? ’ current’ : ‘’);
step.setAttribute(‘role’, ‘listitem’);
step.setAttribute(‘aria-label’, r + (i === qs.currentRank ? ’ – aktueller Rang’ : ‘’));
step.innerHTML =
‘<div class="rs-icon" aria-hidden="true">’ + RANK_ICONS[i] + ‘</div>’ +
‘<span class="rs-lbl">’ + r + ‘</span>’;
el.appendChild(step);
});
}

/* ── Level Grid ── */
function renderLevelGrid() {
var el = document.getElementById(‘level-grid’);
if (!el) return;

var diffs     = t(‘difficulties’);
var diffClass = [‘diff-easy’,‘diff-medium’,‘diff-hard’,‘diff-expert’];

el.innerHTML = ‘’;

// Freigeschaltete Level für dieses Modul
var unlockedForModule = (qs.moduleId !== null && qs.unlockedLevels[qs.moduleId])
? qs.unlockedLevels[qs.moduleId]
: [0];

LEVEL_META.forEach(function (lm, i) {
var key      = qs.moduleId + ‘-’ + i;
var unlocked = unlockedForModule.indexOf(i) !== -1;
var done     = qs.completedLevels[key];

```
var card = document.createElement('article');
card.className = 'level-card' + (unlocked ? '' : ' locked');
card.setAttribute('role', 'listitem');
card.setAttribute('tabindex', '0');
card.setAttribute('aria-label', diffs[i] + (unlocked ? '' : ' – ' + t('prevLvl')));

if (unlocked) {
  card.onclick = function () { startLevel(qs.moduleId, i); };
  card.onkeypress = function (e) { if (e.key === 'Enter') startLevel(qs.moduleId, i); };
} else {
  card.onclick = function () { showToast(t('lockedMsg')); };
}

var starsHtml = '';
if (done !== undefined) {
  for (var s = 0; s < 4; s++) starsHtml += (s < done ? '⭐' : '☆');
}

var badgeClass = unlocked ? diffClass[i] : 'diff-locked';
var badgeText  = unlocked ? diffs[i] : '🔒';
var infoText   = done !== undefined
  ? t('bestMed') + ' ' + lm.medal
  : (unlocked ? t('qInfo') + ' ' + lm.medal : t('prevLvl'));

card.innerHTML =
  '<span class="lc-diff ' + badgeClass + '">' + badgeText + '</span>' +
  '<div class="lc-icon" aria-hidden="true">' + ['📚','⚔️','📐','👑'][i] + '</div>' +
  '<h3>' + diffs[i] + '</h3>' +
  '<p>' + t('qInfo') + '</p>' +
  (done !== undefined ? '<div class="level-stars">' + starsHtml + '</div>' : '') +
  '<div class="level-info">' + infoText + '</div>';

el.appendChild(card);
```

});
}

/* ============================================================
SECTION 10 – QUIZ LOGIC
============================================================ */
function startLevel(moduleId, levelId) {
var questions = QDB[moduleId] && QDB[moduleId][levelId];
if (!questions) { showToast(‘⚠️ Fragen nicht gefunden.’); return; }

qs.moduleId  = moduleId;
qs.levelId   = levelId;
qs.currentQ  = 0;
qs.score     = 0;
qs.answered  = false;
qs.shuffled  = shuffleArray(questions.slice());

// Header
var titleEl = document.getElementById(‘quiz-title’);
if (titleEl) titleEl.textContent = [‘📚’,‘⚔️’,‘📐’,‘👑’][levelId] + ’ ’ + t(‘difficulties’)[levelId];

var totEl = document.getElementById(‘q-tot’);
if (totEl) totEl.textContent = qs.shuffled.length;

var scoreEl = document.getElementById(‘q-score’);
if (scoreEl) scoreEl.textContent = ‘0’;

var nextBtn = document.getElementById(‘next-btn’);
if (nextBtn) nextBtn.textContent = t(‘qNext’);

showPage(‘quiz’);
renderQuestion();
}

function renderQuestion() {
var q     = qs.shuffled[qs.currentQ];
var total = qs.shuffled.length;
qs.answered = false;

// Progress
var curEl  = document.getElementById(‘q-cur’);
var numEl  = document.getElementById(‘q-num’);
var textEl = document.getElementById(‘q-text’);
if (curEl)  curEl.textContent  = qs.currentQ + 1;
if (numEl)  numEl.textContent  = t(‘qLabel’) + ’ ’ + (qs.currentQ + 1) + ’ ’ + t(‘qOf’) + ’ ’ + total;
if (textEl) textEl.textContent = q.q;

// Progress bar
var pct = (qs.currentQ / total) * 100;
var fill = document.getElementById(‘prog-fill’);
if (fill) {
fill.style.width = pct + ‘%’;
fill.parentElement.setAttribute(‘aria-valuenow’, Math.round(pct));
}

// Pill
var pill = document.getElementById(‘q-progress-pill’);
if (pill) pill.setAttribute(‘aria-label’, ’Frage ’ + (qs.currentQ + 1) + ’ von ’ + total);

// Reset
hideExplanation();
hideError();
var nextBtn = document.getElementById(‘next-btn’);
if (nextBtn) nextBtn.style.display = ‘none’;

// Antworten aufbauen
var cont = document.getElementById(‘answers’);
if (!cont) return;
cont.innerHTML = ‘’;

var letters  = [‘A’,‘B’,‘C’,‘D’];
var shuffled = shuffleAnswers(q);   // gibt { text, origIdx }[]
var corrIdx  = shuffled.findIndex(function (a) { return a.origIdx === q.correct; });

shuffled.forEach(function (ans, i) {
var btn = document.createElement(‘button’);
btn.className = ‘answer-btn’;
btn.setAttribute(‘aria-label’, ’Antwort ’ + letters[i] + ’: ’ + ans.text);
btn.innerHTML =
‘<span class="answer-letter" aria-hidden="true">’ + letters[i] + ‘</span>’ +
ans.text;
btn.addEventListener(‘click’, function () { handleAnswer(i, corrIdx, q.exp, btn, cont); });
cont.appendChild(btn);
});
}

function handleAnswer(selected, correct, explanation, clickedBtn, container) {
if (qs.answered) return;
qs.answered = true;

var btns = container.querySelectorAll(’.answer-btn’);
btns.forEach(function (b) { b.disabled = true; });

var isCorrect = (selected === correct);
if (isCorrect) {
qs.score++;
var scoreEl = document.getElementById(‘q-score’);
if (scoreEl) scoreEl.textContent = qs.score;
btns[selected].classList.add(‘correct’);
} else {
btns[selected].classList.add(‘wrong’);
if (btns[correct]) btns[correct].classList.add(‘missed’);
}

showExplanation(isCorrect, explanation);

var nextBtn = document.getElementById(‘next-btn’);
if (nextBtn) nextBtn.style.display = ‘inline-flex’;
}

function nextQ() {
qs.currentQ++;
if (qs.currentQ >= qs.shuffled.length) {
showResult();
} else {
renderQuestion();
}
}

function retryLevel() {
if (qs.moduleId !== null && qs.levelId !== null) {
startLevel(qs.moduleId, qs.levelId);
}
}

/* ── Erklärung ── */
function showExplanation(isCorrect, text) {
var el = document.getElementById(‘explanation’);
if (!el) return;
el.innerHTML = ‘<strong>’ + (isCorrect ? t(‘qRight’) : t(‘qWrong’)) + ’</strong> ’ + text;
el.style.display = ‘block’;
}
function hideExplanation() {
var el = document.getElementById(‘explanation’);
if (el) el.style.display = ‘none’;
}

/* ── Fehlermeldung ── */
function showError(msg) {
var el = document.getElementById(‘error-msg’);
if (el) { el.textContent = msg; el.style.display = ‘block’; }
}
function hideError() {
var el = document.getElementById(‘error-msg’);
if (el) el.style.display = ‘none’;
}

/* ============================================================
SECTION 11 – RESULT / UI UPDATES
============================================================ */
function showResult() {
var lm    = LEVEL_META[qs.levelId];
var total = qs.shuffled.length;
var cor   = qs.score;
var pct   = Math.round((cor / total) * 100);
qs.lastPct = pct;

// Sterne berechnen
var stars = 1;
if (pct >= 90) stars = 4;
else if (pct >= 75) stars = 3;
else if (pct >= 50) stars = 2;

// Fortschritt speichern
var key = qs.moduleId + ‘-’ + qs.levelId;
qs.completedLevels[key] = Math.max(qs.completedLevels[key] || 0, stars);

// Nächstes Level freischalten
var nextLvl = qs.levelId + 1;
if (pct >= 50 && nextLvl < 4) {
if (!qs.unlockedLevels[qs.moduleId]) qs.unlockedLevels[qs.moduleId] = [0];
if (qs.unlockedLevels[qs.moduleId].indexOf(nextLvl) === -1) {
qs.unlockedLevels[qs.moduleId].push(nextLvl);
}
}

// Rang-Aufstieg
var rankedUp = false;
if (pct >= 60 && qs.currentRank < lm.rankUnlock) {
qs.currentRank = lm.rankUnlock;
rankedUp = true;
}

saveLocalState();

// Urkunden-Tier
var tiers = t(‘certTiers’);
var tier  = tiers.find(function (ti) { return pct >= ti.min && pct <= ti.max; }) || tiers[0];

// Bewertungstext
var ratingIdx = pct >= 74 ? 2 : pct >= 40 ? 1 : 0;
var rtIdx     = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 50 ? 1 : 0;
var ranks     = t(‘ranks’);

// User-Achievement speichern
if (currentUser) {
currentUser.certs = currentUser.certs || [];
currentUser.certs.push({ lv: t(‘moduleNames’)[qs.moduleId] + ’ / ’ + t(‘difficulties’)[qs.levelId], pct: pct, medal: tier.medal, date: new Date().toLocaleDateString() });
currentUser.xp = (currentUser.xp || 0) + Math.round(pct / 10) * 5;
if (currentUser.achievements.indexOf(‘first’) === -1)   currentUser.achievements.push(‘first’);
if (pct === 100 && currentUser.achievements.indexOf(‘perfect’) === -1) currentUser.achievements.push(‘perfect’);
if (currentUser.certs.length >= 3 && currentUser.achievements.indexOf(‘three’) === -1) currentUser.achievements.push(‘three’);
if (qs.currentRank >= 6 && currentUser.achievements.indexOf(‘top’) === -1) currentUser.achievements.push(‘top’);
localStorage.setItem(‘ua_user’, JSON.stringify(currentUser));
}

// DOM aktualisieren
setText(‘res-medal’,   lm.medal);
setText(‘res-title’,   t(‘resultT’)[rtIdx]);
setHTML(‘res-rank’,    t(‘rankNow’) + ’ <strong>’ + RANK_ICONS[qs.currentRank] + ’ ’ + ranks[qs.currentRank] + ‘</strong>’);
setHTML(‘score-num’,   cor + ‘<small>/’ + total + ‘</small>’);

// Score-Ring animieren
setTimeout(function () {
var ring = document.getElementById(‘score-ring’);
if (ring) ring.style.background = ’conic-gradient(var(–indigo) ’ + (pct * 3.6) + ‘deg, var(–border) 0deg)’;
}, 300);

setText(‘s-cor’,  cor);
setText(‘s-wr’,   total - cor);
setText(‘s-pct’,  pct + ‘%’);
setText(‘lbl-cor’, t(‘lCorr’));
setText(‘lbl-wr’,  t(‘lWrong’));
setText(‘lbl-pct’, t(‘lPct’));

// Bewertungs-Badge
var badge = document.getElementById(‘rating-badge’);
if (badge) badge.textContent = t(‘ratings’)[ratingIdx];

// Rang-Aufstieg-Banner
var banner = document.getElementById(‘rank-up-banner’);
if (banner) {
if (rankedUp) {
banner.style.display = ‘block’;
banner.innerHTML = t(‘rankUp’) + ’ <strong>’ + RANK_ICONS[qs.currentRank] + ’ ’ + ranks[qs.currentRank] + ‘</strong>’;
} else {
banner.style.display = ‘none’;
}
}

updateAuthUI();
showPage(‘result’);
if (pct >= 70) spawnConfetti();
}

/* ============================================================
SECTION 12 – PDF CERTIFICATE
============================================================ */
function downloadCert() {
if (!currentUser) { openAuth(); return; }

var nameInput = document.getElementById(‘cert-name’);
var name = nameInput ? nameInput.value.trim() : ‘’;
if (!name) name = currentUser.name;
if (!name) { showToast(t(‘noName’)); return; }

var pct   = qs.lastPct;
var total = qs.shuffled ? qs.shuffled.length : 15;
var cor   = qs.score;
var tiers = t(‘certTiers’);
var tier  = tiers.find(function (ti) { return pct >= ti.min && pct <= ti.max; }) || tiers[0];
var today = new Date().toLocaleDateString(
lang === ‘es’ ? ‘es-ES’ : lang === ‘en’ ? ‘en-GB’ : ‘de-DE’,
{ year:‘numeric’, month:‘long’, day:‘numeric’ }
);

// jsPDF aufrufen
var jsPDFLib = (window.jspdf && window.jspdf.jsPDF) ? window.jspdf.jsPDF : (window.jsPDF || null);
if (!jsPDFLib) { showToast(‘⚠️ PDF-Bibliothek nicht geladen.’); return; }

var doc = new jsPDFLib({ orientation:‘landscape’, unit:‘mm’, format:‘a4’ });
var W = 297, H = 210;

// Hintergrund
doc.setFillColor(248,250,252);
doc.rect(0,0,W,H,‘F’);

// Kopfbalken
doc.setFillColor(79,70,229);
doc.rect(0,0,W,16,‘F’);
doc.setFillColor(13,148,136);
doc.rect(W-7,0,7,H,‘F’);

// Rahmen
doc.setDrawColor(79,70,229);
doc.setLineWidth(0.8);
doc.rect(10,22,W-20,H-30);

// Header-Text
doc.setTextColor(255,255,255);
doc.setFont(‘helvetica’,‘bold’);
doc.setFontSize(9);
doc.text(‘UPSKILL ACADEMY · Interaktives Lernen · © Sara Manoochehri’, W/2, 10, {align:‘center’});

// Titel
doc.setFont(‘helvetica’,‘bold’);
doc.setFontSize(22);
doc.setTextColor(79,70,229);
doc.text(tier.title.toUpperCase(), W/2, 48, {align:‘center’});

// Linie
doc.setDrawColor(79,70,229);
doc.setLineWidth(0.7);
doc.line(W/2-55, 53, W/2+55, 53);

// Einleitung
var intro = lang === ‘es’ ? ‘Se certifica que’ : lang === ‘en’ ? ‘This certifies that’ : ‘Hiermit wird bestätigt, dass’;
doc.setFont(‘helvetica’,‘italic’);
doc.setFontSize(10);
doc.setTextColor(100,116,139);
doc.text(intro, W/2, 63, {align:‘center’});

// Name
doc.setFont(‘helvetica’,‘bold’);
doc.setFontSize(22);
doc.setTextColor(30,41,59);
doc.text(name, W/2, 78, {align:‘center’});

// Unterstreichung Name
var nw = doc.getTextWidth(name);
doc.setDrawColor(13,148,136);
doc.setLineWidth(0.5);
doc.line(W/2 - nw/2, 81, W/2 + nw/2, 81);

// Beschreibung
doc.setFont(‘helvetica’,‘normal’);
doc.setFontSize(10);
doc.setTextColor(100,116,139);
doc.text(t(‘certHereby’), W/2, 92, {align:‘center’});
doc.text(’”’ + (t(‘moduleNames’)[qs.moduleId] || ‘’) + ’ / ’ + (t(‘difficulties’)[qs.levelId] || ‘’) + ’” ’ + t(‘certComp’), W/2, 101, {align:‘center’});

doc.setFont(‘helvetica’,‘bold’);
doc.setTextColor(79,70,229);
doc.text(cor + ’ ’ + t(‘qOf’) + ’ ’ + total + ’ (’ + pct + ’%) ’ + t(‘certScored’), W/2, 110, {align:‘center’});

// Score-Badge
doc.setFillColor(79,70,229);
doc.roundedRect(W/2-15, H-48, 30, 13, 2, 2, ‘F’);
doc.setFont(‘helvetica’,‘bold’);
doc.setFontSize(11);
doc.setTextColor(255,255,255);
doc.text(pct + ‘%’, W/2, H-38, {align:‘center’});

// Trennlinie
doc.setDrawColor(226,232,240);
doc.setLineWidth(0.3);
doc.line(36, H-35, W-36, H-35);

// Unterschriften
doc.setFont(‘helvetica’,‘normal’);
doc.setFontSize(8);
doc.setTextColor(100,116,139);
doc.line(26, H-24, 108, H-24);
doc.text(t(‘certSign’), 67, H-20, {align:‘center’});
doc.setFont(‘helvetica’,‘bold’);
doc.setTextColor(30,41,59);
doc.text(‘Sara Manoochehri’, 67, H-15, {align:‘center’});

doc.setFont(‘helvetica’,‘normal’);
doc.setTextColor(100,116,139);
doc.line(W-108, H-24, W-26, H-24);
doc.text(t(‘certDate’), W-67, H-20, {align:‘center’});
doc.setFont(‘helvetica’,‘bold’);
doc.setTextColor(30,41,59);
doc.text(today, W-67, H-15, {align:‘center’});

// Copyright
doc.setFont(‘helvetica’,‘normal’);
doc.setFontSize(7);
doc.setTextColor(148,163,184);
doc.text(‘© Copyright by Sara Manoochehri · Upskill Academy’, W/2, H-8, {align:‘center’});

// Speichern – öffnet in neuem Tab
var safeName = name.replace(/[^a-zA-Z0-9]/g, ‘*’);
doc.save(’Upskill_Academy*’ + safeName + ‘.pdf’);
showToast(t(‘dlOk’));
}

/* ============================================================
SECTION 13 – DASHBOARD
============================================================ */
function renderDashboard() {
if (!currentUser) { openAuth(); return; }

setText(‘dash-av’,    currentUser.name.charAt(0).toUpperCase());
setText(‘dash-name’,  currentUser.name);
setText(‘dash-email’, currentUser.email);

var certs = currentUser.certs || [];
setText(‘d-quizzes’, certs.length);
setText(‘d-certs’,   certs.length);

var xp   = currentUser.xp || 0;
var lv   = Math.floor(xp / 100) + 1;
var prog = xp % 100;
setText(‘xp-lv’,  ‘Level ’ + lv);
setText(‘xp-pts’, xp + ’ XP’);
var xpFill = document.getElementById(‘xp-fill’);
if (xpFill) xpFill.style.width = prog + ‘%’;

// Urkunden-Liste
var cl = document.getElementById(‘cert-list’);
if (cl) {
if (!certs.length) {
cl.innerHTML = ‘<p style="color:var(--text-muted);font-size:0.875rem;">’ + t(‘noCerts’) + ‘</p>’;
} else {
cl.innerHTML = ‘’;
certs.forEach(function (c) {
cl.innerHTML +=
‘<div class="cert-item">’ +
‘<span class="ci-medal">’ + c.medal + ‘</span>’ +
‘<div class="ci-info"><div class="ci-name">’ + c.lv + ‘</div><div class="ci-date">’ + c.date + ‘</div></div>’ +
‘<span class="ci-pct">’ + c.pct + ‘%</span>’ +
‘</div>’;
});
}
}

// Errungenschaften
var ag = document.getElementById(‘ach-grid’);
if (ag) {
ag.innerHTML = ‘’;
ACHIEVEMENTS.forEach(function (a) {
var earned = (currentUser.achievements || []).indexOf(a.id) !== -1;
ag.innerHTML +=
‘<div class="ach ' + (earned ? 'earned' : '') + '">’ +
‘<div class="ach-icon">’ + a.icon + ‘</div>’ +
‘<div class="ach-name">’ + a.name + ‘</div>’ +
‘</div>’;
});
}

// Fortschritts-Übersicht
var po = document.getElementById(‘prog-overview’);
if (po) {
po.innerHTML = ‘’;
t(‘difficulties’).forEach(function (name, i) {
var key  = (qs.moduleId !== null ? qs.moduleId : 0) + ‘-’ + i;
var done = qs.completedLevels[key];
var p    = done ? [0,25,50,75,100][done] : 0;
po.innerHTML +=
‘<div style="margin-bottom:0.625rem;">’ +
‘<div style="display:flex;justify-content:space-between;font-size:0.75rem;margin-bottom:0.25rem;">’ +
‘<span>’ + name + ‘</span>’ +
‘<span style="color:var(--indigo);font-weight:600;">’ + p + ‘%</span>’ +
‘</div>’ +
‘<div class="xp-bar" role="progressbar" aria-valuenow="' + p + '" aria-valuemin="0" aria-valuemax="100">’ +
‘<div class="xp-fill" style="width:' + p + '%"></div>’ +
‘</div></div>’;
});
}
}

/* ============================================================
SECTION 14 – SHARE
============================================================ */
function shareWA() {
var text = encodeURIComponent(
’🎓 Ich habe ’ + qs.lastPct + ‘% im Upskill Academy Quiz erreicht! upskill-academy.com’
);
window.open(‘https://wa.me/?text=’ + text, ‘_blank’);
if (currentUser && currentUser.achievements.indexOf(‘sharer’) === -1) {
currentUser.achievements.push(‘sharer’);
localStorage.setItem(‘ua_user’, JSON.stringify(currentUser));
}
showToast(‘📱 WhatsApp wird geöffnet…’);
}

function shareLI() {
var url = encodeURIComponent(‘https://upskill-academy.com’);
window.open(‘https://www.linkedin.com/sharing/share-offsite/?url=’ + url, ‘_blank’);
showToast(‘💼 LinkedIn wird geöffnet…’);
}

function copyLink() {
var text = ’🎓 ’ + qs.lastPct + ‘% im Upskill Academy Quiz! https://upskill-academy.com’;
if (navigator.clipboard) {
navigator.clipboard.writeText(text).then(function () { showToast(‘✅ Kopiert!’); });
} else {
var ta = document.createElement(‘textarea’);
ta.value = text;
document.body.appendChild(ta);
ta.select();
document.execCommand(‘copy’);
ta.remove();
showToast(‘✅ Kopiert!’);
}
}

/* ============================================================
SECTION 15 – UTILITIES
============================================================ */

/** Toast-Benachrichtigung */
function showToast(msg) {
var el = document.getElementById(‘toast’);
if (!el) return;
el.textContent = msg;
el.classList.add(‘show’);
setTimeout(function () { el.classList.remove(‘show’); }, 2800);
}

/** Konfetti */
function spawnConfetti() {
var cols = [’#4F46E5’,’#0D9488’,’#F59E0B’,’#F43F5E’,’#10B981’];
for (var i = 0; i < 55; i++) {
(function () {
var el = document.createElement(‘div’);
el.className = ‘cp’;
var size = 6 + Math.random() * 8;
el.style.cssText =
‘left:’ + (Math.random() * 100) + ‘vw;’ +
‘top:-10px;’ +
‘width:’ + size + ‘px;’ +
‘height:’ + size + ‘px;’ +
‘background:’ + cols[Math.floor(Math.random() * cols.length)] + ‘;’ +
‘border-radius:’ + (Math.random() > 0.5 ? ‘50%’ : ‘2px’) + ‘;’ +
‘animation-duration:’ + (1.5 + Math.random() * 2) + ‘s;’ +
‘animation-delay:’ + (Math.random() * 0.8) + ‘s;’;
document.body.appendChild(el);
setTimeout(function () { el.remove(); }, 4000);
})();
}
}

/** Array mischen (Fisher-Yates) */
function shuffleArray(arr) {
for (var i = arr.length - 1; i > 0; i–) {
var j = Math.floor(Math.random() * (i + 1));
var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
}
return arr;
}

/** Antworten einer Frage mischen, korrekte Position merken */
function shuffleAnswers(q) {
var items = q.a.map(function (text, origIdx) { return { text: text, origIdx: origIdx }; });
return shuffleArray(items);
}

/** Kurzhelfer: textContent setzen */
function setText(id, val) {
var el = document.getElementById(id);
if (el) el.textContent = val;
}

/** Kurzhelfer: innerHTML setzen */
function setHTML(id, val) {
var el = document.getElementById(id);
if (el) el.innerHTML = val;
}

/* ── Lokaler Fortschritt (localStorage) ── */
function saveLocalState() {
try {
localStorage.setItem(‘ua_v4’, JSON.stringify({
ul: qs.unlockedLevels,
cl: qs.completedLevels,
r:  qs.currentRank,
}));
} catch (e) { /* ignore */ }
}

function loadLocalState() {
try {
var raw = localStorage.getItem(‘ua_v4’);
if (raw) {
var d = JSON.parse(raw);
qs.unlockedLevels  = d.ul || { 0: [0] };
qs.completedLevels = d.cl || {};
qs.currentRank     = d.r  || 0;
}
var userRaw = localStorage.getItem(‘ua_user’);
if (userRaw) {
currentUser = JSON.parse(userRaw);
updateAuthUI();
}
} catch (e) { /* ignore */ }
}