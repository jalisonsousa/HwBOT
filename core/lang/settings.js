//It detects the language
DETECTED_LANG = detectLang();
if (!DETECTED_LANG) DETECTED_LANG = LANG_BR;

LANG = LANG_CONTENT[DETECTED_LANG];
