export interface PostData {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
      rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
      rendered: string;
    };
    content: {
      rendered: string;
      protected: boolean;
    };
    excerpt: {
      rendered: string;
      protected: boolean;
    };
    author: {
      id: number;
      name: string;
      url: string;
      description: string;
      link: string;
      slug: string;
      avatar_urls: Record<string, string>;
      meta: any[]; // Añadir el tipo correcto si es conocido
      _links: Record<string, any[]>; // Añadir el tipo correcto si es conocido
    };
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: {
      _mi_skip_tracking: boolean;
      _monsterinsights_sitenote_active: boolean;
      _monsterinsights_sitenote_note: string;
      _monsterinsights_sitenote_category: number;
      footnotes: string;
    };
    categories: number[];
    tags: any[]; // Añadir el tipo correcto si es conocido
    _links: {
      self: any[];
      collection: any[];
      about: any[];
      author: any[];
      replies: any[];
      'version-history': any[];
      'predecessor-version': any[];
      'wp:featuredmedia': any[];
      'wp:attachment': any[];
      'wp:term': any[];
      curies: any[];
    };
    category: string;
    media: string;
  }
  