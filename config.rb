require "boarding_pass"
require 'uglifier'

set :helpers_dir, "helpers"
set :helpers_filename_glob, "**/*_helper.rb"
set :helpers_filename_to_module_name_proc, Proc.new { |filename|
  basename = File.basename(filename, File.extname(filename))
  basename.camelcase
}

Time.zone = "America/New_York"

set :markdown_engine, :redcarpet
set :markdown,
    :fenced_code_blocks => true,
    :no_intra_emphasis => true,
    :strikethrough => true,
    :smartypants => true,
    :tables => true,
    :link_attributes => { target: "_blank" }

###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# page "*", :layout => :article

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
activate :automatic_image_sizes

# Syntax highlighting
# activate :syntax

# Reload the browser automatically whenever files change
# activate :livereload

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Build-specific configuration
configure :build do
  # config[:katoen] = {
  #   debug: 0
  # }
  config[:iamlos.github.io] = {
     environment: 'deploy',
     # dashboardAPI: '',
     websiteURL: 'https://iamlos.xyz'
  }
  activate :favicon_maker, :icons => {
    "_favicon_template.png" => [
      { icon: "apple-touch-icon-180x180-precomposed.png" },             # Same as apple-touch-icon-57x57.png, for iPhone 6 Plus with @3× display
      { icon: "apple-touch-icon-152x152.png" },             # Same as apple-touch-icon-57x57.png, for retina iPad with iOS7.
      { icon: "apple-touch-icon-144x144.png" },             # Same as apple-touch-icon-57x57.png, for retina iPad with iOS6 or prior.
      { icon: "apple-touch-icon-120x120.png" },             # Same as apple-touch-icon-57x57.png, for retina iPhone with iOS7.
      { icon: "apple-touch-icon-114x114.png" },             # Same as apple-touch-icon-57x57.png, for retina iPhone with iOS6 or prior.
      { icon: "apple-touch-icon-76x76.png" },               # Same as apple-touch-icon-57x57.png, for non-retina iPad with iOS7.
      { icon: "apple-touch-icon-72x72.png" },               # Same as apple-touch-icon-57x57.png, for non-retina iPad with iOS6 or prior.
      { icon: "apple-touch-icon-60x60.png" },               # Same as apple-touch-icon-57x57.png, for non-retina iPhone with iOS7.
      { icon: "apple-touch-icon-57x57.png" },               # iPhone and iPad users can turn web pages into icons on their home screen. Such link appears as a regular iOS native application. When this happens, the device looks for a specific picture. The 57x57 resolution is convenient for non-retina iPhone with iOS6 or prior. Learn more in Apple docs.
      { icon: "apple-touch-icon.png", size: "57x57" },      # Same as apple-touch-icon-57x57.png, for "default" requests, as some devices may look for this specific file. This picture may save some 404 errors in your HTTP logs. See Apple docs
      { icon: "favicon-196x196.png" },                                  # For Android Chrome M31+.
      { icon: "favicon-160x160.png" },                                  # For Opera Speed Dial (up to Opera 12; this icon is deprecated starting from Opera 15), although the optimal icon is not square but rather 256x160. If Opera is a major platform for you, you should create this icon yourself.
      { icon: "favicon-96x96.png" },                                    # For Google TV.
      { icon: "favicon-32x32.png" },                                    # For Safari on Mac OS.
      { icon: "favicon-16x16.png" },                                    # The classic favicon, displayed in the tabs.
      { icon: "favicon.png", size: "16x16" },                           # The classic favicon, displayed in the tabs.
      { icon: "favicon.ico", size: "64x64,32x32,24x24,16x16" },         # Used by IE, and also by some other browsers if we are not careful.
      { icon: "mstile-70x70.png", size: "70x70" },                      # For Windows 8 / IE11.
      { icon: "mstile-144x144.png", size: "144x144" },
      { icon: "mstile-150x150.png", size: "150x150" },
      { icon: "mstile-310x310.png", size: "310x310" },
      { icon: "mstile-310x150.png", size: "310x150" }
    ]
  }
  end
###
# Team member pages
###
page "/team/*", :layout => "team-member"

###
# Blogs
###
activate :blog do |blog|
  blog.name    = "blog"
  blog.prefix  = "blog"
  blog.sources = "{title}.html"
  blog.layout    = "layouts/blog-post"
  blog.permalink = "{title}"
  blog.paginate  = true
  # blog.page_link = "p{num}"
  blog.per_page  = 5
  blog.default_extension = ".md"
end

activate :blog do |blog|
  blog.name    = "case-studies"
  blog.prefix  = "case-studies"
  blog.sources = "{title}.html"
  blog.layout    = "layouts/case-study"
  blog.permalink = "{title}"
  blog.default_extension = ".slim"
end

redirect "services.html", :to => "/#services"
redirect "team.html", :to => "/#team"
redirect "portfolio.html", :to => "/case-studies/"

activate :directory_indexes
# page "/pinterest-e87c7.html", :directory_index => false
page "/sitemap.xml", :layout => false
page "/feed.xml", layout: false

activate :deploy do |deploy|
  deploy.method = :git
  # deploy.build_before = true
  # deploy.remote = "master" # uses 'origin' by default
  deploy.branch = "gh-pages" # uses 'gh-pages' by default
end

set :css_dir,    'stylesheets'
set :js_dir,     'javascripts'
set :images_dir, 'images'
set :fonts_dir,  'fonts'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css,
            :ignore => ['fonts', 'stylesheets/cloud'],
            :inline => true

  # Minify Javascript on build
  uglifier = Uglifier.new(output: {
    inline_script: true
  })
  activate :minify_javascript,
            :inline => true,
            :compressor => uglifier

  # Enable cache buster
  activate :asset_hash, :ignore => [%r{^fonts/cloud}]

  activate :minify_html
  activate :gzip

  activate :asset_host
  set :asset_host, "https://iamlos.xyz"

  # Use relative URLs
  activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
