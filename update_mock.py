with open('src/data/mockData.ts', 'r') as f:
    content = f.read()

oxford_rankings = """    websiteUrl: 'https://www.ox.ac.uk/admissions/graduate/fees-and-funding/scholarships',
    rankings: [
      { name: 'QS World University Rankings', year: 2027, rank: '#4 عالميًا', link: 'https://www.topuniversities.com/universities/university-oxford' },
      { name: 'Times Higher Education (THE)', year: 2026, rank: '#1 عالميًا', link: 'https://www.timeshighereducation.com/world-university-rankings/university-oxford' },
      { name: 'Academic Ranking of World Universities (ARWU)', year: 2026, rank: '#7 عالميًا', link: 'https://www.shanghairanking.com/institution/university-of-oxford' }
    ],
  },"""

content = content.replace("    websiteUrl: 'https://www.ox.ac.uk/admissions/graduate/fees-and-funding/scholarships',\n  },", oxford_rankings)

with open('src/data/mockData.ts', 'w') as f:
    f.write(content)
