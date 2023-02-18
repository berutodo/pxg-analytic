const tables = document.getElementsByTagName('table');
const data = [];

for (let i = 0; i < tables.length; i++) {
    const rows = tables[i].getElementsByTagName('tr');
    for (let j = 1; j < rows.length; j++) {
        const cells = rows[j].getElementsByTagName('td');
        const obj = {
            name: cells[0].textContent.trim(),
            skill: cells[1].textContent.trim(),
            time: cells[2].textContent.trim(),
            craft: cells[3].textContent.trim(),
            img: rows[j].getElementsByTagName('img')[0] ? .src || null
        };
        obj.craft = obj.craft.split('   ').map(str => {
            const match = str.match(/(\d+)\s(.+)/);
            if (match) {
                const quantity = parseInt(match[1]);
                const name = match[2].replace(' of ', ' ').toLowerCase();
                return { name, quantity };
            } else {
                return { name: str.toLowerCase(), quantity: 1 };
            }
        });
        if (obj.craft[0].name === ' ') {
            obj.craft.shift();
        }
        if (obj.img) {
            obj.img = new URL(obj.img, window.location.href).href;
        }
        data.push(obj);
    }
}

console.log(data);