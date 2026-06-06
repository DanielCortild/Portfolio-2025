---
layout: page
permalink: /publications/
nav_title: Publications
title: Publications
description:
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<div class="publications">

<div class="publication-controls">
  <div class="publication-filter" aria-label="Filter publications">
    <button class="publication-filter__button active" type="button" data-publication-filter="all" aria-pressed="true">All</button>
    <button class="publication-filter__button" type="button" data-publication-filter="preprint" aria-pressed="false">Preprints</button>
    <button class="publication-filter__button" type="button" data-publication-filter="publication" aria-pressed="false">Publications</button>
  </div>
  <label class="publication-search">
    <span class="sr-only">Search</span>
    <input class="publication-search__input" type="search" placeholder="Search" aria-label="Search">
  </label>
</div>

{% bibliography --query @*[paper=true]* %}

</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    var filterButtons = document.querySelectorAll(".publication-filter__button");
    var searchInput = document.querySelector(".publication-search__input");
    var publicationEntries = document.querySelectorAll(".publications .publication-entry");
    var activeFilter = "all";

    function normalizeSearchText(value) {
      var normalizedValue = value || "";

      if (normalizedValue.normalize) {
        normalizedValue = normalizedValue.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      }

      return normalizedValue.toLowerCase().replace(/\s+/g, " ").trim();
    }

    function applyPublicationFilters() {
      var searchTerm = normalizeSearchText(searchInput ? searchInput.value : "");
      var searchTerms = searchTerm === "" ? [] : searchTerm.split(" ");

      publicationEntries.forEach(function (entry) {
        var matchesType = activeFilter === "all" || entry.dataset.publicationType === activeFilter;
        var searchableText = normalizeSearchText(entry.dataset.publicationSearch + " " + entry.textContent);
        var matchesSearch = searchTerms.every(function (term) {
          return searchableText.indexOf(term) !== -1;
        });
        var listItem = entry.closest("li");

        if (listItem) {
          listItem.hidden = !(matchesType && matchesSearch);
        }
      });
    }

    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        activeFilter = button.dataset.publicationFilter;

        filterButtons.forEach(function (filterButton) {
          var isActive = filterButton === button;
          filterButton.classList.toggle("active", isActive);
          filterButton.setAttribute("aria-pressed", isActive.toString());
        });

        applyPublicationFilters();
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", applyPublicationFilters);
    }
  });
</script>
