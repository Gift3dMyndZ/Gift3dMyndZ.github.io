import { Search } from 'lucide-react';

interface RepositoryFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  languages: string[];
  resultCount: number;
}

export function RepositoryFilters({
  search,
  onSearchChange,
  selectedLanguage,
  onLanguageChange,
  languages,
  resultCount,
}: RepositoryFiltersProps) {
  return (
    <section
      className="repository-controls"
      aria-label="Repository search and filters"
    >
      <label className="repository-search">
        <Search aria-hidden="true" size={18} />
        <span className="sr-only">Search repositories</span>
        <input
          type="search"
          value={search}
          onChange={event => onSearchChange(event.target.value)}
          placeholder="Search repositories, languages, or topics"
        />
      </label>

      <div className="language-filters" aria-label="Language filters">
        <button
          className={selectedLanguage === 'All' ? 'active' : ''}
          type="button"
          onClick={() => onLanguageChange('All')}
        >
          All
        </button>

        {languages.map(language => (
          <button
            className={
              selectedLanguage === language ? 'active' : ''
            }
            key={language}
            type="button"
            onClick={() => onLanguageChange(language)}
          >
            {language}
          </button>
        ))}
      </div>

      <p className="repository-result-count">
        {resultCount} {resultCount === 1 ? 'repository' : 'repositories'}
      </p>
    </section>
  );
}
