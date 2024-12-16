export async function searchContent(query: string): Promise<PageSearchResult[]> {
  if (!query.trim()) {
    return [];
  }

  // Search index'i fetch et
  const response = await fetch('/search-index.json');
  const { pages } = await response.json();
  
  const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 2);
  const results: SearchResult[] = [];

  // Tüm dokümanlarda arama yap
  pages.forEach((doc, docIndex) => {
    let score = 0;
    const text = doc.content.toLowerCase();
    
    searchTerms.forEach(term => {
      const matches = text.match(new RegExp(term, 'g')) || [];
      score += matches.length;
    });

    if (score > 0) {
      // İlgili bölümleri bul
      const contextSize = 100;
      let excerpt = '';
      
      searchTerms.forEach(term => {
        const index = text.indexOf(term);
        if (index >= 0) {
          const start = Math.max(0, index - contextSize);
          const end = Math.min(text.length, index + term.length + contextSize);
          excerpt = '...' + text.slice(start, end) + '...';
        }
      });

      results.push({
        id: `result-${docIndex}`,
        title: doc.title,
        excerpt: excerpt,
        url: doc.path,
        score: score
      });
    }
  });

  // Sonuçları grupla
  const groupedResults = results.reduce((acc: PageSearchResult[], result) => {
    const existingPage = acc.find(page => page.url === result.url);
    if (existingPage) {
      existingPage.results.push(result);
    } else {
      acc.push({
        url: result.url,
        title: result.title,
        results: [result]
      });
    }
    return acc;
  }, []);

  return groupedResults.sort((a, b) => 
    b.results.reduce((sum, r) => sum + r.score, 0) - 
    a.results.reduce((sum, r) => sum + r.score, 0)
  );
} 