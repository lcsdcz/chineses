// 全局变量
let currentChapter = '';
let currentPoemIndex = 0;
let poems = [];
let currentExerciseType = 'auto';
let currentExerciseConfig = null;

// 多选模式相关变量
let selectedPoems = [];
let selectionMode = 'single';
let exerciseMode = 'complete';

// 分页相关变量
let currentPage = 0;
let questionsPerPage = 10;
let allQuestions = [];

// 内置备用数据库
const builtinPoemDatabase = {};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('古诗文默写系统已加载完成！');
    const activeDatabase = (typeof poemDatabase !== 'undefined') ? poemDatabase : builtinPoemDatabase;
    console.log('数据库包含章节：', Object.keys(activeDatabase));
    
    loadExternalData();
    setupSelectionModeListeners();
});

// 设置选择模式监听器
function setupSelectionModeListeners() {
    document.querySelectorAll('input[name="selectionMode"]').forEach(radio => {
        radio.addEventListener('change', function() {
            selectionMode = this.value;
            selectedPoems = [];
            displayPoemList();
        });
    });
    
    document.querySelectorAll('input[name="exerciseMode"]').forEach(radio => {
        radio.addEventListener('change', function() {
            exerciseMode = this.value;
            const randomSettings = document.getElementById('randomSettings');
            if (this.value === 'random') {
                randomSettings.style.display = 'block';
            } else {
                randomSettings.style.display = 'none';
            }
        });
    });
}

// 加载外部数据文件
function loadExternalData() {
    if (typeof poemDatabase !== 'undefined') {
        console.log('使用外部数据文件');
        return;
    }
    console.log('使用内置数据');
}

// 选择章节
function selectChapter(chapter) {
    console.log('选择章节：', chapter);
    currentChapter = chapter;
    
    const db = (typeof poemDatabase !== 'undefined') ? poemDatabase : builtinPoemDatabase;
    poems = db[chapter] || [];
    
    document.getElementById('chapterSelection').style.display = 'none';
    document.getElementById('poemSelection').style.display = 'block';
    document.getElementById('currentChapter').textContent = chapter;
    displayPoemList();
}

// 显示诗文列表
function displayPoemList() {
    const poemList = document.getElementById('poemList');
    poemList.innerHTML = '';
    
    poems.forEach((poem, index) => {
        const poemItem = document.createElement('div');
        poemItem.className = 'poem-item';
        poemItem.dataset.index = index;
        
        if (selectionMode === 'single') {
            poemItem.onclick = () => selectPoem(index);
        } else {
            poemItem.onclick = () => togglePoemSelection(index);
        }
        
        poemItem.innerHTML = `
            <div class="poem-checkbox" style="display: ${selectionMode === 'multi' ? 'block' : 'none'}">
                <input type="checkbox" id="poem_${index}" ${selectedPoems.includes(index) ? 'checked' : ''}>
            </div>
            <h4>${poem.title}</h4>
            <p class="author">${poem.author}</p>
        `;
        
        poemList.appendChild(poemItem);
    });
    
    updateActionButtons();
}

// 选择诗文（单选模式）
function selectPoem(index) {
    currentPoemIndex = index;
    const poem = poems[index];
    
    document.getElementById('poemSelection').style.display = 'none';
    document.getElementById('recitationPage').style.display = 'block';
    document.getElementById('poemTitle').textContent = poem.title;
    
    displayPoem(poem);
}

// 切换诗文选择（多选模式）
function togglePoemSelection(index) {
    const checkbox = document.getElementById(`poem_${index}`);
    if (selectedPoems.includes(index)) {
        selectedPoems = selectedPoems.filter(i => i !== index);
        checkbox.checked = false;
    } else {
        selectedPoems.push(index);
        checkbox.checked = true;
    }
    updateActionButtons();
}

// 更新操作按钮显示
function updateActionButtons() {
    const actionButtons = document.getElementById('actionButtons');
    const exerciseMode = document.getElementById('exerciseMode');
    
    if (selectionMode === 'multi') {
        actionButtons.style.display = 'block';
        exerciseMode.style.display = 'block';
        
        const startBtn = document.querySelector('.start-exercise-btn');
        if (selectedPoems.length > 0) {
            startBtn.disabled = false;
            startBtn.textContent = `开始练习 (${selectedPoems.length}篇)`;
        } else {
            startBtn.disabled = true;
            startBtn.textContent = '开始练习';
        }
    } else {
        actionButtons.style.display = 'none';
        exerciseMode.style.display = 'none';
    }
}

// 清除选择
function clearSelection() {
    selectedPoems = [];
    displayPoemList();
}

// 开始多选练习
function startMultiExercise() {
    if (selectedPoems.length === 0) {
        alert('请至少选择一篇古诗文！');
        return;
    }
    
    const exerciseMode = document.querySelector('input[name="exerciseMode"]:checked').value;
    
    if (exerciseMode === 'complete') {
        startCompleteExercise();
    } else {
        startRandomExercise();
    }
}

// 开始完整题目练习
function startCompleteExercise() {
    const allSentences = [];
    selectedPoems.forEach(poemIndex => {
        const poem = poems[poemIndex];
        if (poem.sentences) {
            poem.sentences.forEach(sentence => {
                allSentences.push({
                    ...sentence,
                    poemTitle: poem.title,
                    poemAuthor: poem.author
                });
            });
        }
    });
    
    currentExerciseConfig = {
        type: 'multiComplete',
        title: `多篇完整练习 (${selectedPoems.length}篇)`,
        description: '所有选中古诗文的完整练习',
        items: allSentences,
        currentIndex: 0
    };
    
    document.getElementById('poemSelection').style.display = 'none';
    document.getElementById('recitationPage').style.display = 'block';
    document.getElementById('poemTitle').textContent = currentExerciseConfig.title;
    
    displayMultiExercise();
}

// 开始随机练习
function startRandomExercise() {
    const totalQuestions = parseInt(document.getElementById('totalQuestions').value) || 10;
    
    const allSentences = [];
    selectedPoems.forEach(poemIndex => {
        const poem = poems[poemIndex];
        if (poem.sentences) {
            poem.sentences.forEach(sentence => {
                allSentences.push({
                    ...sentence,
                    poemTitle: poem.title,
                    poemAuthor: poem.author
                });
            });
        }
    });
    
    const selectedSentences = selectRandomSentences(allSentences, totalQuestions);
    
    currentExerciseConfig = {
        type: 'multiRandom',
        title: `随机练习 (${totalQuestions}题)`,
        description: `从${selectedPoems.length}篇古诗文中随机抽取${totalQuestions}题`,
        items: selectedSentences,
        currentIndex: 0
    };
    
    document.getElementById('poemSelection').style.display = 'none';
    document.getElementById('recitationPage').style.display = 'block';
    document.getElementById('poemTitle').textContent = currentExerciseConfig.title;
    
    displayMultiExercise();
}

// 随机选择句子，确保公平性
function selectRandomSentences(allSentences, count) {
    const poemGroups = {};
    allSentences.forEach(sentence => {
        const key = `${sentence.poemTitle}_${sentence.poemAuthor}`;
        if (!poemGroups[key]) {
            poemGroups[key] = [];
        }
        poemGroups[key].push(sentence);
    });
    
    const poemKeys = Object.keys(poemGroups);
    const selectedSentences = [];
    
    const minPerPoem = Math.floor(count / poemKeys.length);
    const remaining = count % poemKeys.length;
    
    poemKeys.forEach((key, index) => {
        const sentences = poemGroups[key];
        const selectCount = minPerPoem + (index < remaining ? 1 : 0);
        
        const shuffled = shuffleArray([...sentences]);
        selectedSentences.push(...shuffled.slice(0, selectCount));
    });
    
    return shuffleArray(selectedSentences);
}

// 数组随机打乱函数
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// 显示多选练习
function displayMultiExercise() {
    const questionsContainer = document.getElementById('questionsContainer');
    questionsContainer.innerHTML = '';
    
    if (!currentExerciseConfig || currentExerciseConfig.items.length === 0) {
        questionsContainer.innerHTML = '<p>没有可用的练习题目</p>';
        return;
    }
    
    allQuestions = currentExerciseConfig.items;
    
    const totalPages = Math.ceil(allQuestions.length / questionsPerPage);
    currentPage = 0;
    
    const paginationControls = document.getElementById('paginationControls');
    if (totalPages > 1) {
        paginationControls.style.display = 'flex';
        updatePageInfo(totalPages);
    } else {
        paginationControls.style.display = 'none';
    }
    
    // 在标题右边添加"显示所有答案"按钮
    const poemTitle = document.getElementById('poemTitle');
    if (poemTitle && !poemTitle.querySelector('.show-all-answers-btn')) {
        const titleContainer = document.createElement('div');
        titleContainer.className = 'title-container';
        titleContainer.style.display = 'flex';
        titleContainer.style.alignItems = 'center';
        titleContainer.style.justifyContent = 'space-between';
        titleContainer.style.gap = '15px';
        
        const titleText = poemTitle.textContent;
        poemTitle.textContent = '';
        
        const titleSpan = document.createElement('span');
        titleSpan.textContent = titleText;
        titleContainer.appendChild(titleSpan);
        
        const showAllBtn = document.createElement('button');
        showAllBtn.className = 'show-all-answers-btn';
        showAllBtn.onclick = toggleAllAnswers;
        showAllBtn.textContent = '显示所有答案';
        titleContainer.appendChild(showAllBtn);
        
        // 添加字体大小调整控件
        const fontSizeControls = document.createElement('div');
        fontSizeControls.className = 'font-size-controls';
        fontSizeControls.innerHTML = `
            <label>题目字体：</label>
            <input type="range" id="questionFontSize" min="12" max="24" value="16" onchange="adjustFontSize('question', this.value)">
            <span id="questionFontSizeValue">16px</span>
            <label>答案字体：</label>
            <input type="range" id="answerFontSize" min="12" max="24" value="16" onchange="adjustFontSize('answer', this.value)">
            <span id="answerFontSizeValue">16px</span>
        `;
        titleContainer.appendChild(fontSizeControls);
        
        const hideAllBtn = document.createElement('button');
        hideAllBtn.className = 'hide-all-answers-btn';
        hideAllBtn.onclick = hideAllAnswers;
        hideAllBtn.textContent = '一键隐藏答案';
        hideAllBtn.style.display = 'none';
        titleContainer.appendChild(hideAllBtn);
        
        poemTitle.appendChild(titleContainer);
    }
    
    displayCurrentPage();
}

// 显示当前页的题目
function displayCurrentPage() {
    const questionsContainer = document.getElementById('questionsContainer');
    questionsContainer.innerHTML = '';
    
    const startIndex = currentPage * questionsPerPage;
    const endIndex = Math.min(startIndex + questionsPerPage, allQuestions.length);
    const currentQuestions = allQuestions.slice(startIndex, endIndex);
    

    
    currentQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-item';
        
        const questionNumber = startIndex + index + 1;
        
        questionDiv.innerHTML = `
            <div class="question-header">
                <span class="question-number">${questionNumber}</span>
                <button class="show-answer-btn" onclick="toggleAnswer(this, '${question.back || '（无后半句）'}')">显示答案</button>
                <span class="question-source">${question.poemTitle || '未知'} - ${question.poemAuthor || '未知'}</span>
            </div>
            <div class="question-content">
                <p class="question-text">${question.front}</p>
                <div class="answer-section">
                    <p class="answer-text" style="display: none;">答案：${question.back || '（无后半句）'}</p>
                </div>
            </div>
        `;
        
        questionsContainer.appendChild(questionDiv);
    });
}

// 更新页码信息
function updatePageInfo(totalPages) {
    const pageInfo = document.getElementById('pageInfo');
    pageInfo.textContent = `第 ${currentPage + 1} 页，共 ${totalPages} 页`;
}

// 上一页
function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        displayCurrentPage();
        updatePageInfo(Math.ceil(allQuestions.length / questionsPerPage));
    }
}

// 下一页
function nextPage() {
    const totalPages = Math.ceil(allQuestions.length / questionsPerPage);
    if (currentPage < totalPages - 1) {
        currentPage++;
        displayCurrentPage();
        updatePageInfo(totalPages);
    }
}

// 显示诗文内容
function displayPoem(poem) {
    const questionsContainer = document.getElementById('questionsContainer');
    questionsContainer.innerHTML = '';
    
    createExerciseSelector(poem);
}

// 创建练习选择器
function createExerciseSelector(poem) {
    const questionsContainer = document.getElementById('questionsContainer');
    
    const existingSelector = document.querySelector('.exercise-selector');
    if (existingSelector) existingSelector.remove();
    
    questionsContainer.innerHTML = '';
    
    if (!poem.exercises || poem.exercises.length === 0) {
        createDefaultExercise(poem);
        return;
    }
    
    const exerciseSelector = document.createElement('div');
    exerciseSelector.className = 'exercise-selector';
    
    let selectorHTML = '<h4>选择练习方式：</h4><div class="exercise-options">';
    
    poem.exercises.forEach((exercise, index) => {
        selectorHTML += `
            <div class="exercise-option" onclick="selectExercise(${index})">
                <h5>${exercise.title}</h5>
                <p>${exercise.description}</p>
                <span class="exercise-type-badge">${getExerciseTypeName(exercise.type)}</span>
            </div>
        `;
    });
    
    selectorHTML += '</div>';
    
    selectorHTML += `
        <div class="exercise-type-selector" style="margin-top:16px;">
            <h4>整篇练习</h4>
            <div class="exercise-buttons">
                <button class="exercise-btn" onclick="startFullText('fillBack')">整篇填后句</button>
                <button class="exercise-btn" onclick="startFullText('fillFront')">整篇填前句</button>
            </div>
        </div>
    `;
    exerciseSelector.innerHTML = selectorHTML;
    
    questionsContainer.appendChild(exerciseSelector);
}

// 选择练习
function selectExercise(exerciseIndex) {
    const poem = poems[currentPoemIndex];
    currentExerciseConfig = poem.exercises[exerciseIndex];
    
    const selector = document.querySelector('.exercise-selector');
    if (selector) selector.remove();
    
    generateCustomExercise();
}

// 启动整篇自动生成的前/后句练习
function startFullText(type) {
    currentExerciseType = type === 'fillFront' ? 'fillFront' : 'fillBack';
    const selector = document.querySelector('.exercise-selector');
    if (selector) selector.remove();
    generateExercise();
}

// 生成自定义练习
function generateCustomExercise() {
    const questionsContainer = document.getElementById('questionsContainer');
    let exercise = currentExerciseConfig;
    
    console.log('生成自定义练习：', exercise);
    
    questionsContainer.innerHTML = '';
    
    if (exercise && exercise.autoFull === true && (exercise.type === 'fillFront' || exercise.type === 'fillBack')) {
        const poem = poems[currentPoemIndex];
        const pairs = splitIntoFrontBackPairs(poem.content);
        const items = pairs.map(p => ({ front: p.front, back: p.back }));
        exercise = { ...exercise, items };
    }

    let questions = [];

    if (exercise.type === 'auto') {
        const words = poems[currentPoemIndex].content.split('');
        const blanks = exercise.blanks || [];
        
        blanks.forEach((index, i) => {
            questions.push({
                number: i + 1,
                front: words.slice(0, index).join(''),
                back: words[index],
                source: `${poems[currentPoemIndex].title} - ${poems[currentPoemIndex].author}`,
                poemTitle: poems[currentPoemIndex].title,
                poemAuthor: poems[currentPoemIndex].author
            });
        });
        
    } else if (exercise.type === 'fillFront' || exercise.type === 'fillBack') {
        const items = exercise.items || [];
        
        items.forEach((item, index) => {
            if (exercise.type === 'fillFront') {
                questions.push({
                    number: index + 1,
                    front: item.back,
                    back: item.front,
                    source: `${poems[currentPoemIndex].title} - ${poems[currentPoemIndex].author}`,
                    poemTitle: poems[currentPoemIndex].title,
                    poemAuthor: poems[currentPoemIndex].author
                });
            } else {
                questions.push({
                    number: index + 1,
                    front: item.front,
                    back: item.back,
                    source: `${poems[currentPoemIndex].title} - ${poems[currentPoemIndex].author}`,
                    poemTitle: poems[currentPoemIndex].title,
                    poemAuthor: poems[currentPoemIndex].author
                });
            }
        });
    }
    
    allQuestions = questions;
    
    const totalPages = Math.ceil(allQuestions.length / questionsPerPage);
    currentPage = 0;
    
    const paginationControls = document.getElementById('paginationControls');
    if (totalPages > 1) {
        paginationControls.style.display = 'flex';
        updatePageInfo(totalPages);
    } else {
        paginationControls.style.display = 'none';
    }
    
    // 在标题右边添加"显示所有答案"按钮
    const poemTitle = document.getElementById('poemTitle');
    if (poemTitle && !poemTitle.querySelector('.show-all-answers-btn')) {
        const titleContainer = document.createElement('div');
        titleContainer.className = 'title-container';
        titleContainer.style.display = 'flex';
        titleContainer.style.alignItems = 'center';
        titleContainer.style.justifyContent = 'space-between';
        titleContainer.style.gap = '15px';
        
        const titleText = poemTitle.textContent;
        poemTitle.textContent = '';
        
        const titleSpan = document.createElement('span');
        titleSpan.textContent = titleText;
        titleContainer.appendChild(titleSpan);
        
        const showAllBtn = document.createElement('button');
        showAllBtn.className = 'show-all-answers-btn';
        showAllBtn.onclick = toggleAllAnswers;
        showAllBtn.textContent = '显示所有答案';
        titleContainer.appendChild(showAllBtn);
        
        // 添加字体大小调整控件
        const fontSizeControls = document.createElement('div');
        fontSizeControls.className = 'font-size-controls';
        fontSizeControls.innerHTML = `
            <label>题目字体：</label>
            <input type="range" id="questionFontSize" min="12" max="24" value="16" onchange="adjustFontSize('question', this.value)">
            <span id="questionFontSizeValue">16px</span>
            <label>答案字体：</label>
            <input type="range" id="answerFontSize" min="12" max="24" value="16" onchange="adjustFontSize('answer', this.value)">
            <span id="answerFontSizeValue">16px</span>
        `;
        titleContainer.appendChild(fontSizeControls);
        
        const hideAllBtn = document.createElement('button');
        hideAllBtn.className = 'hide-all-answers-btn';
        hideAllBtn.onclick = hideAllAnswers;
        hideAllBtn.textContent = '一键隐藏答案';
        hideAllBtn.style.display = 'none';
        titleContainer.appendChild(hideAllBtn);
        
        poemTitle.appendChild(titleContainer);
    }
    
    displayCurrentPage();
}

// 创建默认练习
function createDefaultExercise(poem) {
    const questionsContainer = document.getElementById('questionsContainer');
    
    const exerciseTypeSelector = document.createElement('div');
    exerciseTypeSelector.className = 'exercise-type-selector';
    exerciseTypeSelector.innerHTML = `
        <h4>选择练习类型：</h4>
        <div class="exercise-buttons">
            <button class="exercise-btn" onclick="setExerciseType('auto')">自动模式</button>
            <button class="exercise-btn" onclick="setExerciseType('fillFront')">填前句</button>
            <button class="exercise-btn" onclick="setExerciseType('fillBack')">填后句</button>
        </div>
    `;
    
    questionsContainer.appendChild(exerciseTypeSelector);
    
    setExerciseType('auto');
}

// 获取练习类型名称
function getExerciseTypeName(type) {
    const typeNames = {
        'auto': '自动模式',
        'fillFront': '填前句',
        'fillBack': '填后句'
    };
    return typeNames[type] || type;
}

// 设置练习类型
function setExerciseType(type) {
    currentExerciseType = type;
    
    document.querySelectorAll('.exercise-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const targetBtn = document.querySelector(`[onclick="setExerciseType('${type}')"]`);
    if (targetBtn) {
        targetBtn.classList.add('active');
    }
    
    generateExercise();
}

// 生成练习内容
function generateExercise() {
    const poem = poems[currentPoemIndex];
    const questionsContainer = document.getElementById('questionsContainer');
    
    console.log('生成练习，诗文：', poem.title);
    console.log('练习类型：', currentExerciseType);
    console.log('诗文内容：', poem.content);
    
    const selector = document.querySelector('.exercise-type-selector');
    
    questionsContainer.innerHTML = '';
    
    let questions = [];
    
    if (currentExerciseType === 'auto') {
        const words = poem.content.split('');
        const blankIndices = poem.blanks || [];
        
        blankIndices.forEach((index, i) => {
            questions.push({
                number: i + 1,
                front: words.slice(0, index).join(''),
                back: words[index],
                source: `${poem.title} - ${poem.author}`,
                poemTitle: poem.title,
                poemAuthor: poem.author
            });
        });
        
    } else if (currentExerciseType === 'fillFront') {
        const pairs = splitIntoFrontBackPairs(poem.content);
        console.log('填前句模式，分割后的前后句对：', pairs);
        
        pairs.forEach((pair, index) => {
            questions.push({
                number: index + 1,
                front: pair.back,
                back: pair.front,
                source: `${poem.title} - ${poem.author}`,
                poemTitle: poem.title,
                poemAuthor: poem.author
            });
        });
        
    } else if (currentExerciseType === 'fillBack') {
        const pairs = splitIntoFrontBackPairs(poem.content);
        console.log('填后句模式，分割后的前后句对：', pairs);
        
        pairs.forEach((pair, index) => {
            questions.push({
                number: index + 1,
                front: pair.front,
                back: pair.back,
                source: `${poem.title} - ${poem.author}`,
                poemTitle: poem.title,
                poemAuthor: poem.author
            });
        });
    }
    
    console.log('生成的题目：', questions);
    
    allQuestions = questions;
    
    const totalPages = Math.ceil(allQuestions.length / questionsPerPage);
    currentPage = 0;
    
    const paginationControls = document.getElementById('paginationControls');
    if (totalPages > 1) {
        paginationControls.style.display = 'flex';
        updatePageInfo(totalPages);
    } else {
        paginationControls.style.display = 'none';
    }
    
    // 在标题右边添加"显示所有答案"按钮
    const poemTitle = document.getElementById('poemTitle');
    if (poemTitle && !poemTitle.querySelector('.show-all-answers-btn')) {
        const titleContainer = document.createElement('div');
        titleContainer.className = 'title-container';
        titleContainer.style.display = 'flex';
        titleContainer.style.alignItems = 'center';
        titleContainer.style.justifyContent = 'space-between';
        titleContainer.style.gap = '15px';
        
        const titleText = poemTitle.textContent;
        poemTitle.textContent = '';
        
        const titleSpan = document.createElement('span');
        titleSpan.textContent = titleText;
        titleContainer.appendChild(titleSpan);
        
        const showAllBtn = document.createElement('button');
        showAllBtn.className = 'show-all-answers-btn';
        showAllBtn.onclick = toggleAllAnswers;
        showAllBtn.textContent = '显示所有答案';
        titleContainer.appendChild(showAllBtn);
        
        // 添加字体大小调整控件
        const fontSizeControls = document.createElement('div');
        fontSizeControls.className = 'font-size-controls';
        fontSizeControls.innerHTML = `
            <label>题目字体：</label>
            <input type="range" id="questionFontSize" min="12" max="24" value="16" onchange="adjustFontSize('question', this.value)">
            <span id="questionFontSizeValue">16px</span>
            <label>答案字体：</label>
            <input type="range" id="answerFontSize" min="12" max="24" value="16" onchange="adjustFontSize('answer', this.value)">
            <span id="answerFontSizeValue">16px</span>
        `;
        titleContainer.appendChild(fontSizeControls);
        
        const hideAllBtn = document.createElement('button');
        hideAllBtn.className = 'hide-all-answers-btn';
        hideAllBtn.onclick = hideAllAnswers;
        hideAllBtn.textContent = '一键隐藏答案';
        hideAllBtn.style.display = 'none';
        titleContainer.appendChild(hideAllBtn);
        
        poemTitle.appendChild(titleContainer);
    }
    
    displayCurrentPage();
}

// 寻找自然的分割点
function findNaturalSplitPoint(sentence) {
    const commaIndex = sentence.indexOf('，');
    const pauseIndex = sentence.indexOf('、');
    
    if (commaIndex !== -1) {
        return commaIndex + 1;
    } else if (pauseIndex !== -1) {
        return pauseIndex + 1;
    } else {
        return Math.floor(sentence.length / 2);
    }
}

// 将整篇文本拆成前后句对
function splitIntoFrontBackPairs(text) {
    const sentences = text.split('。').map(s => s.trim()).filter(Boolean);
    
    const pairs = [];
    
    sentences.forEach(sentence => {
        if (!sentence) return;
        
        const splitPoint = findNaturalSplitPoint(sentence);
        
        const front = sentence.substring(0, splitPoint);
        const back = sentence.substring(splitPoint);
        
        if (front && back) {
            pairs.push({ front, back });
        } else if (front) {
            pairs.push({ front: '', back: front });
        }
    });
    
    console.log('前后句对：', pairs);
    return pairs;
}

// 返回章节选择
function backToChapter() {
    currentChapter = '';
    currentPoemIndex = 0;
    poems = [];
    
    document.getElementById('poemSelection').style.display = 'none';
    document.getElementById('recitationPage').style.display = 'none';
    document.getElementById('chapterSelection').style.display = 'block';
}

// 切换答案显示/隐藏
function toggleAnswer(button, answer) {
    const questionItem = button.closest('.question-item');
    const answerText = questionItem.querySelector('.answer-text');
    if (answerText.style.display === 'none') {
        answerText.style.display = 'block';
        button.textContent = '隐藏答案';
        button.classList.add('active');
    } else {
        answerText.style.display = 'none';
        button.textContent = '显示答案';
        button.classList.remove('active');
    }
}

// 显示所有答案
function toggleAllAnswers() {
    const answerTexts = document.querySelectorAll('.answer-text');
    const showAllBtn = document.querySelector('.show-all-answers-btn');
    const hideAllBtn = document.querySelector('.hide-all-answers-btn');
    
    answerTexts.forEach(answerText => {
        answerText.style.display = 'block';
    });
    
    // 更新所有按钮状态
    document.querySelectorAll('.show-answer-btn').forEach(btn => {
        btn.textContent = '隐藏答案';
        btn.classList.add('active');
    });
    
    showAllBtn.style.display = 'none';
    hideAllBtn.style.display = 'inline-block';
}

// 隐藏所有答案
function hideAllAnswers() {
    const answerTexts = document.querySelectorAll('.answer-text');
    const showAllBtn = document.querySelector('.show-all-answers-btn');
    const hideAllBtn = document.querySelector('.hide-all-answers-btn');
    
    answerTexts.forEach(answerText => {
        answerText.style.display = 'none';
    });
    
    // 更新所有按钮状态
    document.querySelectorAll('.show-answer-btn').forEach(btn => {
        btn.textContent = '显示答案';
        btn.classList.remove('active');
    });
    
    showAllBtn.style.display = 'inline-block';
    hideAllBtn.style.display = 'none';
}

// 切换原文显示/隐藏
function toggleOriginalText(button, source) {
    const questionDiv = button.closest('.question-item');
    const originalTextSection = questionDiv.querySelector('.original-text-section');
    
    if (originalTextSection.style.display === 'none') {
        originalTextSection.style.display = 'block';
        button.textContent = '隐藏原文';
        button.classList.add('active');
    } else {
        originalTextSection.style.display = 'none';
        button.textContent = '显示原文';
        button.classList.remove('active');
    }
}

// 调整字体大小
function adjustFontSize(type, size) {
    const sizeValue = size + 'px';
    
    if (type === 'question') {
        document.querySelectorAll('.question-text').forEach(text => {
            text.style.fontSize = sizeValue;
        });
        document.getElementById('questionFontSizeValue').textContent = sizeValue;
    } else if (type === 'answer') {
        document.querySelectorAll('.answer-text, .original-text').forEach(text => {
            text.style.fontSize = sizeValue;
        });
        document.getElementById('answerFontSizeValue').textContent = sizeValue;
    }
}

// 返回诗文选择
function backToPoem() {
    currentPoemIndex = 0;
    
    document.getElementById('recitationPage').style.display = 'none';
    document.getElementById('poemSelection').style.display = 'block';
}
