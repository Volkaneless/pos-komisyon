import { ArrowLeft, User, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

interface BlogDetailLayoutProps {
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
  slug: string;
}

const BlogDetailLayout = ({
  title,
  description,
  category,
  author,
  date,
  readTime,
  image,
  content,
  slug
}: BlogDetailLayoutProps) => {
  return (
    <>
      <Helmet>
        <title>{title} | POS Komisyon</title>
        <meta name="description" content={description} />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Back to Blog Link */}
          <Link 
            to="/blog" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Blog'a Dön
          </Link>

          {/* Category Tag */}
          <div className="mb-4">
            <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              {category}
            </span>
          </div>

          {/* Title and Description */}
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-foreground mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          {/* Meta Information */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
              <h2 className="text-white text-4xl font-bold text-center px-8">
                {title}
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-4xl">
            <div 
              className="prose prose-lg max-w-none 
                prose-headings:text-foreground prose-headings:font-bold prose-headings:mb-6 prose-headings:mt-8
                prose-h2:text-2xl prose-h2:font-bold prose-h2:mb-6 prose-h2:mt-8
                prose-h3:text-xl prose-h3:font-semibold prose-h3:mb-4 prose-h3:mt-8
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6 prose-p:mt-0
                prose-strong:text-foreground prose-strong:font-semibold
                prose-ul:text-muted-foreground prose-ul:mb-6 prose-li:mb-2
                prose-ol:text-muted-foreground prose-ol:mb-6 prose-ol:list-decimal
                prose-table:w-full prose-table:border-collapse prose-table:mb-6
                prose-th:border prose-th:border-border prose-th:bg-muted prose-th:p-3 prose-th:text-left prose-th:font-semibold
                prose-td:border prose-td:border-border prose-td:p-3"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailLayout;