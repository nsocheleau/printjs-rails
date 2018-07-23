# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'printjs/rails/version'

Gem::Specification.new do |spec|
  spec.name          = "printjs-rails"
  spec.version       = Printjs::Rails::VERSION
  spec.authors       = ["Nicolas Socheleau"]
  spec.email         = ["nicolas@technick-consultant.com"]
  spec.summary       = %q{Asset engine for print.js}
  spec.description   = "http://printjs.crabbly.com"
  spec.homepage      = ""
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0")
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.6"
  spec.add_development_dependency "rake"
end
