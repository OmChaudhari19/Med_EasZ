const sympthons = ['memory', 'hunger', 'lower', 'ulceration', 'rough', 'pallor', 'disorientation', 'away', 'paralysis', 'appear', 'motivation', 'extremity', 'swelling', 'attack', 'pimple', 'recent', 'dry', 'depressed', 'coordination', 'go', 'brain', 'size', 'pale', 'nearsightedness', 'depression', 'stool', 'delay', 'patch', 'project', 'vigorous', 'height', 'sneezing', 'extend', 'unwell', 'intellectual', 'excessive', 'itchy', 'disability', 'swallowing', 'enlargement', 'blood', 'tissue', 'lesion', 'ringing', 'drooping', 'triangular', 'bad', 'malabsorption', 'enlarged', 'index', 'distance', 'sleepiness', 'emotional', 'swell', 'hold', 'mood', 'alcohol', 'wrist', 'acquiring', 'nonaligned', 'minimal', 'voice', 'eyelid', 'outer', 'game', 'large', 'skin', 'stroke', 'salivation', 'red', 'genitals', 'video', 'burning', 'lasting', 'sweat', 'rash', 'one', 'typically', 'feel', 'fear', 'vaginal', 'heat', 'mucus', 'extremely', 'nasal', 'discomfort', 'acid', 'localized', 'lip', 'open', 'difficulty', 'mental', 'heartburn', 'penis', 'inability', 'amount', 'tingling', 'anxiety', 'intolerance', 'increased', 'bite', 'drinking', 'rigidity', 'elbow', 'usage', 'break', 'watery', 'loose', 'itchiness', 'upper', 'baby', 'eye', 'impaired', 'tumor', 'testicular', 'weight', 'sore', 'rapid', 'menstruation', 'feature', 'coma', 'last', 'head', 'production', 'involved', 'involuntary', 'finger', 'urine', 'darker', 'cutting', 'jaw', 'sputum', 'sudden', 'second', 'yellow', 'sleeping', 'bladder', 'sit', 'younger', 'stabbing', 'interest', 'forehead', 'stiffness', 'headache', 'shakiness', 'fleeting', 'ulcer', 'illness', 'thin', 'gum', 'fat', 'gas', 'grip', 'stuffy', 'dementia', 'skeletal', 'bone', 'maculopapular', 'erythema', 'color', 'muscular', 'side', 'external', 'confused', 'diarrhea', 'irregular', 'mid', 'remember', 'weak', 'water', 'spasm', 'swollen', 'repeatedly', 'including', 'clenched', 'worrying', 'sensation', 'along', 'passing', 'perform', 'profuse', 'consciousness', 'bruising', 'mixed', 'movement', 'tender', 'seizure', 'disease', 'broken', 'death', 'irritability', 'purple', 'smell', 'cell', 'problem', 'swing', 'distention', 'confusion', 'term', 'back', 'weakening', 'shivering', 'redness', 'stripe', 'lymph', 'dimpling', 'herpetiformis', 'see', 'dehydration', 'extreme', 'undetectable', 'nearly', 'fever', 'gain', 'bloody', 'high', 'spleen', 'growth', 'middle', 'vary', 'talking', 'part', 'colored', 'cramp', 'heartbeat', 'rate', 'risk', 'sharp', 'seeing', 'motion', 'reading', 'inflamed', 'physical', 'remembering', 'blindness', 'insomnia', 'warm', 'crust', 'flu', 'yellowish', 'tremor', 'event', 'stopping', 'mole', 'near', 'edge', 'cm', 'marginatum', 'hair', 'certain', 'pulsing', 'may', 'change', 'unexplained', 'urinate', 'without', 'stomach', 'aching', 'filled', 'chill', 'discolored', 'decreased', 'photophobia', 'think', 'breathing', 'getting', 'specific', 'itching', 'stunted', 'walking', 'smelling', 'subtype', 'limb', 'double', 'heavy', 'slowness', 'different', 'time', 'painful', 'leg', 'others', 'tolerate', 'prominent', 'social', 'belching', 'turn', 'light', 'delayed', 'reflex', 'birth', 'shock', 'widespread', 'palate', 'overlapping', 'lying', 'print', 'vomiting', 'right', 'prolonged', 'ability', 'generally', 'infection', 'faint', 'post', 'sound', 'minute', 'nipple', 'language', 'gradual', 'interaction', 'non', 'communication', 'long', 'dermatitis', 'uterine', 'understanding', 'stature', 'farther', 'bump', 'wart', 'thinking', 'bleeding', 'neck', 'shortness', 'form', 'pressure', 'spot', 'anemia', 'characteristic', 'speaking', 'fullness', 'chest', 'material', 'hallucination', 'gland', 'protein', 'strength', 'webbed', 'behavior', 'taking', 'fluid', 'hoarse', 'thirst', 'progressive', 'arm', 'dark', 'black', 'feeling', 'trouble', 'dizziness', 'lump', 'discharge', 'hearing', 'turning', 'abnormally', 'fist', 'base', 'delusion', 'sleep', 'dilated', 'sitting', 'nausea', 'none', 'thing', 'pupil', 'like', 'le', 'worse', 'routine', 'cry', 'opening', 'constipation', 'occur', 'coloration', 'ear', 'daytime', 'standing', 'blue', 'breath', 'thought', 'little', 'cornea', 'depends', 'object', 'thyroid', 'strain', 'tick', 'severe', 'scratchiness', 'bluish', 'poor', 'weakness', 'pain', 'eating', 'result', 'thumb', 'variable', 'sensitivity', 'newly', 'ache', 'big', 'reddish', 'painless', 'multiple', 'mouth', 'foot', 'hard', 'bowel', 'hand', 'distant', 'crawl', 'irritation', 'playing', 'better', 'breakdown', 'temporary', 'mild', 'tired', 'going', 'diarrhoea', 'period', 'myopia', 'fatigue', 'unable', 'surrounding', 'around', 'resulting', 'upon', 'loss', 'menstrual', 'gestational', 'shaking', 'low', 'wet', 'sometimes', 'sex', 'fast', 'numbness', 'lot', 'blurred', 'bacterial', 'affected', 'infertility', 'missed', 'week', 'muscle', 'tiredness', 'easy', 'distorted', 'myalgia', 'ring', 'small', 'close', 'often', 'year', 'random', 'cough', 'need', 'runny', 'developmental', 'check', 'frequent', 'age', 'firm', 'chronic', 'outburst', 'stiff', 'joint', 'sunlight', 'spell', 'cold', 'inside', 'pink', 'site', 'bowed', 'symptom', 'short', 'recurring', 'tooth', 'throat', 'occurring', 'episode', 'genital', 'pinkish', 'coughing', 'nose', 'taste', 'urination', 'shinbone', 'barky', 'scab', 'half', 'velvety', 'eyestrain', 'varying', 'breast', 'thick', 'delirium', 'excess', 'beginning', 'toe', 'tonsil', 'cyst', 'node', 'damp', 'peeling', 'appetite', 'abscess', 'raised', 'jerky', 'sweating', 'clumsy', 'move', 'withdrawal', 'white', 'psychosis', 'wheezing', 'parotid', 'organ', 'teeth', 'childbirth', 'body', 'shingle', 'doesnt', 'child', 'laughter', 'hyperopia', 'energy', 'blister', 'jaundice', 'blurry', 'restricted', 'present', 'face', 'outward', 'acne', 'overlying', 'persistent', 'abdomen', 'tightness', 'inverted', 'unintended', 'unpleasant', 'flat', 'heart', 'moderate', 'abnormal', 'pregnant', 'usually', 'area', 'abdominal', 'expanding', 'coolness', 'temperature', 'longer', 'needing', 'tolerance', 'drip', 'range', 'bloating', 'facial', 'repetitive', 'shape', 'degree', 'scaly', 'depending', 'vision', 'increasing', 'sadness', 'pattern']

export default sympthons;

