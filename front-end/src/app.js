document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    const fetchPreview = async (url) => {
        try {
            const response = await fetch(`https://didactic-yodel-6x79x7rgx7f5477-3000.app.github.dev/preview?url=${encodeURIComponent(url)}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching preview: ', error);
            return null;
        }
    };

    const renderPreview = (metadata) => {
        if (!metadata) {
            app.innerHTML = '<a key=${urlIndex} href={url} class="block mt-2 text-sm font-medium text-blue-700 bg-blue-100 border border-blue-200 rounded-lg hover:bg-blue-200 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-800 px-2 py-1">{metadata.url}</a>'
            return;
        }

        app.innerHTML = `
        <div class="bg-white p-4 rounded shadow">
            <img src="${metadata.image}" alt="${metadata.title}" class="w-full h-64 object-cover rounded-t">
            <div class="p-4">
                <h2 class="text-xl font-bold">${metadata.title}</h2>
                <p class="text-gray-700">${metadata.description}</p>
                <a href="${metadata.url}" target="_blank" class="text-blue-500">Read more</a>
            </div>
        </div>
    `;
    };

    const init = async () => {
        const url = prompt('Enter a url: ');
        if (url) {
            const metadata = await fetchPreview(url);
            renderPreview(metadata);
        }
    };
    init();
})