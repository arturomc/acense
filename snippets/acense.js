ace.define("ace/snippets/acense",["require","exports","module"], function(require, exports, module) {
"use strict";

exports.snippetText = "# Query\n\
snippet query\n\
	\"query\" : {}\n\
# Explain\n\
snippet explain\n\
	\"explain\" : true\n\
# Facets\n\
snippet facets\n\
	\"facets\" : {\n\
		\"NAME\": {\n\
			\"TYPE\": {}\n\
		}\n\
	}\n\
# Fields\n\
snippet fields\n\
	\"fields\": [\n\
		\"$FIELD$\"\n\
	]\n\
# Filter\n\
snippet filter\n\
	\"filter\": {}\n\
# From\n\
snippet from\n\
	\"from\": {}\n\
# Highlight\n\
snippet highlight\n\
	\"highlight\": {}\n\
# Partial Fields\n\
snippet partial_fields\n\
	\"partial_fields\": {\n\
		\"NAME\": {\n\
			\"include\": []\n\
		}\n\
	}\n\
# Script fields\n\
snippet script_fields\n\
	\"script_fields\": {\n\
		\"FIELD\": {\n\
			\"script\": \"\"\n\
		}\n\
	}\n\
# Search type\n\
snippet search_type\n\
	\"search_type\": {}\n\
# Size\n\
snippet size\n\
	\"size\": 20\n\
# Sort\n\
snippet sort\n\
	\"sort\": [\n\
		{\n\
			\"FIELD\": {\n\
				\"order\": \"desc\"\n\
			}\n\
		}\n\
	]\n\
# Stats\n\
snippet stats\n\
	\"stats\": [\n\
		\"\"\n\
	]\n\
# Date histogram\n\
snippet date_histogram\n\
	\"date_histogram\": {\n\
		\"field\": \"FIELD\",\n\
		\"interval\": \"day\"\n\
	}\n\
# Facet filter\n\
snippet facet_filter\n\
	\"facet_filter\": {}\n\
# Histogram\n\
snippet histogram\n\
	\"date_histogram\": {\n\
		\"field\": \"FIELD\",\n\
		\"interval\": \"100\"\n\
	}\n\
# Range\n\
snippet range\n\
	\"range\": {\n\
		\"field\": \"FIELD\",\n\
			\"ranges\": [\n\
			{\n\
				\"to\": 50\n\
			},\n\
			{\n\
				\"from\": 20,\n\
				\"to\": 70\n\
			},\n\
			{\n\
				\"from\": 70,\n\
				\"to\": 120\n\
			},\n\
			{\n\
				\"from\": 150\n\
			}\n\
		]\n\
	}\n\
# Statistical\n\
snippet statistical\n\
	\"statistical\": {\n\
		\"field\": \"FIELD\"\n\
	}\n\
# Terms\n\
snippet terms\n\
	\"terms\": {\n\
		\"field\": \"FIELD\",\n\
			\"size\": 10\n\
	}\n\
# Terms stats\n\
snippet terms_stats\n\
	\"terms_stats\": {\n\
		\"key_field\": \"FIELD\",\n\
			\"value_field\": \"FIELD\"\n\
	}\n\
# filter.and\n\
snippet and\n\
	\"and\": {\n\
		\"filters\": [\n\
			{}\n\
		]\n\
	}\n\
# filter.bool\n\
snippet bool\n\
	\"bool\": {}\n\
# filter.exists\n\
snippet exists\n\
	\"exists\": {\n\
		\"FIELD\": \"VALUE\"\n\
	}\n\
# filter.fquery\n\
snippet fquery\n\
	\"fquery\": {\n\
		\"query\": {},\n\
		\"_cache\": true\n\
	}\n\
# filter.geo_bounding_box\n\
snippet geo_bounding_box\n\
	\"geo_bounding_box\": {\n\
		\"FIELD\": {\n\
			\"top_left\": {\n\
				\"lat\": 40.73,\n\
					\"lon\": -74.1\n\
			},\n\
			\"bottom_right\": {\n\
				\"lat\": 40.717,\n\
					\"lon\": -73.99\n\
			}\n\
		}\n\
	}\n\
# filter.geo_distance\n\
snippet geo_distance\n\
	\"geo_distance\": {\n\
		\"distance\": 100,\n\
			\"distance_unit\": \"km\",\n\
			\"FIELD\": {\n\
			\"lat\": 40.73,\n\
				\"lon\": -74.1\n\
		}\n\
	}\n\
# filter.geo_distance_range\n\
snippet geo_distance_range\n\
	\"geo_distance_range\": {\n\
		\"from\": 100,\n\
			\"to\": 200,\n\
			\"distance_unit\": \"km\",\n\
			\"FIELD\": {\n\
			\"lat\": 40.73,\n\
				\"lon\": -74.1\n\
		}\n\
	}\n\
# filter.geo_polygon\n\
snippet geo_polygon\n\
	\"geo_polygon\": {\n\
		\"FIELD\": {\n\
			\"points\": [\n\
				{\n\
					\"lat\": 40.73,\n\
					\"lon\": -74.1\n\
				},\n\
				{\n\
					\"lat\": 40.83,\n\
					\"lon\": -75.1\n\
				}\n\
			]\n\
		}\n\
	}\n\
# filter.geo_shape\n\
snippet geo_shape\n\
	\"geo_shape\": {\n\
		\"FIELD\": {\n\
			\"shape\": {\n\
				\"type\": \"envelope\",\n\
					\"coordinates\": [\n\
					[\n\
						-45,\n\
						45\n\
					],\n\
					[\n\
						45,\n\
						-45\n\
					]\n\
				]\n\
			},\n\
			\"relation\": \"within\"\n\
		}\n\
	}\n\
# filter.has_child\n\
snippet has_child\n\
	\"has_child\": {\n\
		\"type\": \"TYPE\",\n\
			\"query\": {}\n\
	}\n\
# filter.has_parent\n\
snippet parent\n\
	\"has_parent\": {\n\
		\"type\": \"TYPE\",\n\
			\"query\": {}\n\
	}\n\
# filter.ids\n\
snippet ids\n\
	\"ids\": {\n\
		\"values\": [\n\
			\"ID\"\n\
		]\n\
	}\n\
# filter.limit\n\
snippet limit\n\
	\"limit\": {\n\
		\"value\": 100\n\
	}\n\
# filter.match_all\n\
snippet match_all\n\
	\"match_all\": {}\n\
# filter.missing\n\
snippet missing\n\
	\"missing\": {\n\
		\"field\": \"FIELD\"\n\
	}\n\
# filter.nested\n\
snippet nested\n\
	\"nested\": {\n\
		\"path\": \"path_to_nested_doc\",\n\
		\"query\": {}\n\
	}\n\
# filter.not\n\
snippet not\n\
	\"not\": {\n\
		\"filter\": {}\n\
	}\n\
# filter.numeric_range\n\
snippet numeric_range\n\
	\"numeric_range\": {\n\
		\"FIELD\": {\n\
			\"from\": 10,\n\
				\"to\": 20\n\
		}\n\
	}\n\
# filter.or\n\
snippet or\n\
	\"or\": {\n\
		\"filters\": [\n\
			{}\n\
		]\n\
	}\n\
# filter.prefix\n\
snippet prefix\n\
	\"prefix\": {\n\
		\"FIELD\": \"VALUE\"\n\
	}\n\
# filter.script\n\
snippet script\n\
	\"script\": {\n\
		\"script\": \"SCRIPT\",\n\
			\"params\": {}\n\
	}\n\
# filter.term\n\
snippet term\n\
	\"term\": {\n\
		\"FIELD\": \"VALUE\"\n\
	}\n\
# filter.type\n\
snippet type\n\
	\"type\": {\n\
		\"value\": \"TYPE\"\n\
	}\n\
# highlight.fields\n\
snippet fields\n\
	\"fields\": {}\n\
# highlight.post_tags\n\
snippet post_tags\n\
	\"post_tags\": {}\n\
# highlight.pre_tags\n\
snippet pre_tags\n\
	\"pre_tags\": {}\n\
# highlight.tags_schema\n\
snippet tags_schema\n\
	\"tags_schema\": {}\n\
# query.boosting\n\
snippet boosting	\n\
	\"boosting\": {},\n\
	\"constant_score\": {\n\
		\"filter\": {},\n\
		\"boost\": 1.2\n\
	}\n\
# query.custom_boost_factor\n\
snippet custom_boost_factor	\n\
	\"custom_boost_factor\": {\n\
		\"query\": {},\n\
		\"boost_factor\": 1.1\n\
	}\n\
# query.custom_filters_score\n\
snippet custom_filters_score\n\
	\"custom_filters_score\": {\n\
		\"query\": {},\n\
		\"filters\": [\n\
			{\n\
				\"filter\": {}\n\
			}\n\
		]\n\
	}\n\
# query.custom_score\n\
snippet custom_score	\n\
	\"custom_score\": {\n\
		\"query\": {},\n\
		\"script\": \"\"\n\
	}\n\
# query.dis_max\n\
snippet dis_max	\n\
	\"dis_max\": {\n\
		\"tie_breaker\": 0.7,\n\
			\"boost\": 1.2,\n\
			\"queries\": []\n\
	}\n\
# query.field\n\
snippet field\n\
	\"field\": {}\n\
	\"filtered\": {\n\
		\"query\": {},\n\
		\"filter\": {}\n\
	}\n\
# query.fit\n\
snippet fit\n\
	\"flt\": {}\n\
# query.fuzzy\n\
snippet fuzzy\n\
	\"fuzzy\": {}\n\
# query.fuzzy_like_this\n\
snippet fuzzy_like_this\n\
	\"fuzzy_like_this\": {}\n\
# query.indices\n\
snippet indices	\n\
	\"indices\": {\n\
		\"indices\": [\n\
			\"INDEX1\",\n\
			\"INDEX2\"\n\
		],\n\
			\"query\": {}\n\
	}\n\
# query.match\n\
snippet match	\n\
	\"match\": {\n\
		\"FIELD\": \"TEXT\"\n\
	}\n\
# query.match_phrase\n\
snippet match_phrase	\n\
	\"match_phrase\": {\n\
		\"FIELD\": \"PHRASE\"\n\
	}\n\
# query.match_phrase_prefix\n\
snippet match_phrase_prefix\n\
	\"match_phrase_prefix\": {\n\
		\"FIELD\": \"PREFIX\"\n\
	}\n\
# query.more_like_this\n\
snippet more_like_this\n\
	\"more_like_this\": {\n\
		\"fields\": [\n\
			\"FIELD\"\n\
		],\n\
			\"like_text\": \"text like this one\",\n\
			\"min_term_freq\": 1,\n\
			\"max_query_terms\": 12\n\
	}\n\
# query.more_like_this_field\n\
snippet more_like_this_field\n\
	\"more_like_this_field\": {\n\
		\"FIELD\": {\n\
			\"like_text\": \"text like this one\",\n\
				\"min_term_freq\": 1,\n\
				\"max_query_terms\": 12\n\
		}\n\
	}\n\
# query.multi_match\n\
snippet multi_match	\n\
	\"multi_match\": {\n\
		\"query\": \"\",\n\
			\"fields\": []\n\
	}\n\
# query.query_string\n\
snippet query_string	\n\
	\"query_string\": {\n\
		\"default_field\": \"FIELD\",\n\
			\"query\": \"this AND that OR thus\"\n\
	},\n\
# query.span_first\n\
snippet span_first\n\
	\"span_first\": {\n\
		\"match\": {\n\
			\"span_term\": {\n\
				\"FIELD\": \"VALUE\"\n\
			}\n\
		},\n\
		\"end\": 3\n\
	},\n\
# query.span_near\n\
snippet span_near\n\
	\"span_near\": {\n\
		\"clauses\": [\n\
			{\n\
				\"span_term\": {\n\
					\"FIELD\": {\n\
						\"value\": \"VALUE\"\n\
					}\n\
				}\n\
			}\n\
		],\n\
			\"slop\": 12,\n\
			\"in_order\": false\n\
	},\n\
# query.span_not\n\
snippet span_not\n\
	\"span_not\": {\n\
		\"include\": {\n\
			\"span_term\": {\n\
				\"FIELD\": {\n\
					\"value\": \"VALUE\"\n\
				}\n\
			}\n\
		},\n\
		\"exclude\": {\n\
			\"span_term\": {\n\
				\"FIELD\": {\n\
					\"value\": \"VALUE\"\n\
				}\n\
			}\n\
		}\n\
	},\n\
# query.span_or\n\
snippet span_or\n\
	\"span_or\": {\n\
		\"clauses\": [\n\
			{\n\
				\"span_term\": {\n\
					\"FIELD\": {\n\
						\"value\": \"VALUE\"\n\
					}\n\
				}\n\
			}\n\
		]\n\
	}\n\
";
exports.scope = "acense";

});
