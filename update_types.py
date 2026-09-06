with open('src/types.ts', 'r') as f:
    content = f.read()

ranking_interface = """
export interface UniversityRanking {
  name: string;
  year: number;
  rank: string;
  link?: string;
}

export interface University {
"""

content = content.replace('export interface University {', ranking_interface)

university_rankings_prop = """  topMajors: string[];
  websiteUrl: string;
  rankings?: UniversityRanking[];
}"""

content = content.replace('  topMajors: string[];\n  websiteUrl: string;\n}', university_rankings_prop)

with open('src/types.ts', 'w') as f:
    f.write(content)
