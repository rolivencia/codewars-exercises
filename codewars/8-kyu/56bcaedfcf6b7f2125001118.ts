// Solution for the 56bcaedfcf6b7f2125001118 problem in CodeWars: 'Safen User Input Part I - htmlspecialchars' (8 kyu)

export function htmlspecialchars(formData: string): string {
    return formData
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
}
