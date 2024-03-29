if (typeof LANG_CONTENT === 'undefined') LANG_CONTENT = []

LANG_CONTENT[LANG_EN] = {
    CONFIG_FUNCTION_TITLE: "Functions",
    NOT_REGULAR_PAGE: "HwBot: running nothing. This is not a regular game page",
    CONTROL_PANEL_TITLE: "HwBot Wars",
    PERFORM_MEDIUM_MISSIONS: "Medium missions",
    PERFORM_HARD_MISSIONS: "Hard missions",
    PERFORM_DELETE_SOFTWARE: "Very easy missions",
    NOTIFY_MISSIONS: "Notify me about new missions",
    NOTIFY_EMAIL: "Notify me when I receive something important on email",
    NOTIFY_NAME: "Notify name of Who Hacks me",
    AUTO_CHANGE_IP: "Auto IP change",
    DDOS_DELETE: "Delete DDoS Reports",
    INTERCEPT_TRANSACTIONS: "Intercept bank transactions on",
    TRANSFER_TO_BTC: "Transfer the earned money to connected BTC wallet",
    CLEAN_OWN_LOGS: "Clean your logs",
    CLEAN_VICTIM_LOGS: "Clean victim logs",
    ACCESS_CLEAR: "Intrude via Brute Force and clean logs",
    ACCESS_CLEAR_PORT: "Intrude via Exploit and clean logs",
    NOTIFY_LOGS: "Notify me about suspicious activity on my logs",
    RUN_WEBCRAWLER: "Run webcrawler",
    PASTE_IPS: "Text containing ips",
    SECONDS: "seconds",
    WEBCRAWLER_INITIAL_HOSTS: "Starting by these hosts:",
    WEBCRAWLER_IGNORE_HOSTS: "Ignore these ips:",
    WEBCRAWLER_UPLOAD_SOFTWARES: "Upload these softwares:",
    WEBCRAWLER_UPLOAD_WAIT: "Wait until",
    WEBCRAWLER_EXPLOIT: "Use Exploits instead of CRC",
    WEBCRAWLER_SKIP_AFTER_UPLOAD: "Install right after uploading and clear logs only after installation.",
    WEBCRAWLER_HIDE_UPLOAD: "Hide software after install",
    WEBCRAWLER_LEAVE_SIGNATURE: "Leave my signature",
    WEBCRAWLER_FIND_SIGNATURE: "(find other signature)",
    WEBCRAWLER_FILTER_WITH: "Filter content using regex (e.g.  .*\\.crc.*  or  .*\\.vcol.*  or  .*something.*)",
    REQUEST_ASSIT: "Resquest Help",
    CREDITS_TITLE: "Credits",
    CREDITS_cmathiswausau: "Domain repairs on manifest.json file",
    CREDITS_dominicusdev: "Massive code reorganization and bugs repairs",
    CREDITS_gresendesa: "jSpaghetti implementation, riddle solver, webcrawler, notifiers and translation to Portuguese",
    CREDITS_Klorker: "Code revision, new visual features and log cleaners",
    CREDITS_perfilrobo: "Missions performer, uploader and bank camping (first and main developer)",
    CREDITS_Quartz101: "Performance revision",
    CREDITS_sjs1985: "Software upload improvements, two new checkboxes added",
    CREDITS_fkapitalism: "Settings area and webcrawler scripts sandbox",
    CREDITS_AssHole12: "Translation to German",
    CREDITS_exteraDev: "Small design improvements and adjustments to avoid banning",
    CREDITS_Logfro: "DDoS",
    CREDITS_OTHERS: "and dozens of people who contributed with suggestions and bug reports.",
    CREDITS_BACK_BUTTON: "Back",
    REPOSITORY_LINK: '<b>version ' + VERSION_BOT + '</b>',
    WARNING_BUTTON: 'IMPORTANT!\n\n *To solve puzzles, go to an UNSOLVED puzzle page and click over the blue button that will appear.\n\n*Avoid to run the bot into an inactive tab. There are some time counting limitations when tab is inactive in most browsers. So, the bot may get slow if it\'s run into a inactive tab.\n\n* Use the notifiers carefully. The suspect logs notifier sends a GET request every second uninterruptedly. The new missions notifier sends a GET request every two seconds just when seconds to next missions are <= 1. Otherwise, it just waits. Big amounts of requests may be noticed by the game server. \'X-Requested-With\' header is not sent. :)\n\n* Abort the bot anytime. Just click over red bot button. \n\n* If bot suddendly stops, just try to reload the page. If it doesn\'t work, abort the bot. If you know how to access browser console, copy the error and/or jSpaghetti debug logs and report the problem on official repository.',
    DISCONNECTED_BTC_WALLET: 'You\'ve chosen to transfer the earned money to your BTC wallet. But you need to login your BTC wallet before. Login your BTC wallet and try again.',
    CAMPING_WITHOUT_VINCULATED_ACCOUNT: 'There\'s no bank account vinculated to{CONTENT}',
    CAMPING_CHOOSE_IP: 'Choose a bank ip',
    MISSIONS_PERMISSION_TO_ABORT: 'Do you allow bot to abort missions if necessary? (Cancel to NO)',
    MISSIONS_WEAK_CRACKER: 'Your cracker is not strong enough to continue',
    MISSION_ANOTHER_MISSION_KIND_ALREADY_ACCEPTED: 'It seems there is another mission of another type already accepted. Finish it or abort it before trying again.',
    WEBCRAWLER_SINTAX_SOFTWARE_FIELD: 'Ops. Check the softwares field. \nMake sure software name and software version is being separated with \":\". \nUse \",\" to separate different softwares.',
    WEBCRAWLER_SOFTWARE_NOT_FOUND: 'Software "{CONTENT1}" version "{CONTENT2}" not found',
    WEBCRAWLER_UPLOAD_SOFTWARE_MODEL: '{name:version}, ...',
    WEBCRAWLER_RESULTS_IPS_FOUND: '## NEW IPS FOUND ## ',
    WEBCRAWLER_RESULTS_ACCESSIBLE_HOSTS: '## ACCESSIBLE HOSTS ##',
    WEBCRAWLER_RESULTS_INACCESSIBLE_HOSTS: '## INACCESSIBLE HOSTS ## ',
    WEBCRAWLER_RESULTS_NOVPC: '## noVPC LIST ## ',
    WEBCRAWLER_RESULTS_UNCHECKED_HOSTS: '## UNCHECKED HOSTS ## ',
    WEBCRAWLER_RESULTS_UPLOADS: '## UPLOADS ##',
    WEBCRAWLER_RESULTS_BTC: '## BTC LOGS ## ',
    WEBCRAWLER_RESULTS_SHOPPING: '## SHOPPING LOGS ## ',
    WEBCRAWLER_RESULTS_SOFTWARES: '## SOFTWARES FOUND ##',
    WEBCRAWLER_SCRIPT_TITLE: 'Webcrawler script',
    WEBCRAWLER_SHARE_HOSTS: 'Share crawled hosts with the community',
    UPDATE_CRACKER: "Solve riddles and upgrade cracker",
    COMPLETE_PATH_ERROR: "You must log in a riddle server before using this feature!",
    CONFIG_AREA_TITLE: "Settings",
    CONFIG_GENERAL_TITLE: "General",
    CONFIG_NOTIFIERS_TITLE: "Notifications",
    CONFIG_WEBCRAWL_TITLE: "Webcrawler",
    CONFIG_POPUP_BOT: "Pop up bot window after instruction",
    CONFIG_LANG_NAME: "Language",
    SEND: "Send",
    INSERT_EMAIL: "Enter Your Email",
    IP_RESETED_SUCESSFULY: "IP Reset Successfuly!",
    NEW_INTRUDER: "New Hacker!",
    NEW_INTRUDER_TEXT: "You Got Hacked By ",
    RUN_DDOSER: "Start DDoSing",
    DDOS_IP: "Target IP",
    DDOS_HOST: "IP to Attack: ",
    DDOS_TIMES: "Number of times: ",
	NOTIFICATION_TITLE: "Thanks To Enable Notification!",
	NOTIFICATION_BODY: "Now you Able to get Notified!",
    WARN_WEBCRAWLER_RESULT: "see the result on browser console",
    EASY_BUTTON_CLEAN_TARGET_IPS: "remove my clues",
    EASY_BUTTON_CLEAN_MYLOGS: "clean my own logs"
}
