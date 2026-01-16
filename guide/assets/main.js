
/* 公共 JS 逻辑：菜单切换与一键复制 */
document.addEventListener('DOMContentLoaded', () => {
    // 菜单切换
    const menuBtn = document.getElementById('menuBtn');
    const sidebar = document.getElementById('sidebar');
    if (menuBtn && sidebar) {
        menuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('-translate-x-full');
        });
    }

    // 一键复制
    document.querySelectorAll('pre').forEach(block => {
        const button = document.createElement('button');
        button.innerText = '复制';
        button.className = 'copy-btn absolute top-2 right-2 px-2 py-1 bg-slate-700 text-white text-xs rounded hover:bg-slate-600 transition opacity-0 group-hover:opacity-100';
        block.classList.add('relative', 'group');
        block.appendChild(button);

        button.addEventListener('click', () => {
            const code = block.querySelector('code').innerText;
            navigator.clipboard.writeText(code).then(() => {
                button.innerText = '已复制!';
                setTimeout(() => button.innerText = '复制', 2000);
            });
        });
    });
});
