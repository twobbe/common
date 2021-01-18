"use strict";
/*global XU: true*/
/* eslint-disable no-constructor-bind/no-constructor-bind */

(function _TabBar()
{
	class TabBar
	{
		constructor(node)
		{
			this.node = node;
			this.onTabChanged = null;

			this.boundClickHandler = this.clickHandler.bind(this);
			this.node.addEventListener("click", this.boundClickHandler);
		}

		// Returns the currently selected tabid
		getSelectedTab()
		{
			const selectedTab = this.node.querySelector(".tab.selected");
			return selectedTab ? selectedTab.dataset.tabid : null;
		}

		// Called to destroy this tooltip
		destroy()
		{
			this.node.removeEventListener("click", this.boundClickHandler);
		}

		// Will switch to a specific tabid
		switchToTab(tabid)
		{
			const tab = Array.from(this.node.querySelectorAll(".tab")).reduceOnce(v => (v.dataset.tabid===tabid ? v : undefined));
			if(!tab || tab.classList.contains("selected"))
				return;

			this.node.querySelector(".tab.selected").classList.remove("selected");
			this.node.parentNode.querySelector(".tabContent.selected").classList.remove("selected");

			tab.classList.add("selected");
			Array.from(this.node.parentNode.querySelectorAll(".tabContent")).find(t => t.dataset.tabid===tabid).classList.add("selected");

			if(this.onTabChanged)
				this.onTabChanged(tabid);
		}

		// Called when the tabBar tab is clicked
		clickHandler(e)
		{
			if(!e.target)
				return;

			const tab = e.target.getAncestor(o => o.classList.contains("tab") && o.parentNode.classList.contains("tabBar"));
			if(!tab)
				return;

			this.switchToTab(tab.dataset.tabid);
		}
	}

	XU.TabBar = TabBar;
})();
