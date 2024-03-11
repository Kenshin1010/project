// Function to show the branch list and focus on the search input
function showBranchList() {
    var branchList = document.getElementById("branchListId");
    var searchInput = document.getElementById("searchSalaryBranch");
    if (branchList && searchInput) {
        branchList.style.display = "block";
        searchInput.focus();
    }
}

// Function to handle selection of branch name
function selectBranchName(event) {
    var selectedBranch = event.target.textContent.trim(); // Lấy nội dung của branch name đã được click
    var salaryBranchInput = document.getElementById("salaryBranch");
    if (salaryBranchInput) {
        salaryBranchInput.value = selectedBranch; // Đặt nội dung vào input#salaryBranch
        hideBranchList();
    }
}

// Function to hide the branch list
function hideBranchList() {
    var branchList = document.getElementById("branchListId");
    if (branchList) {
        branchList.style.display = "none";
    }
}

// Event listeners for showing/hiding branch list
document.getElementById("salaryBranch").addEventListener("click", showBranchList);
document.getElementById("salaryBranchSortDownIcon").addEventListener("click", showBranchList);

// Event listener for selecting branch name
document.querySelectorAll(".branch-name").forEach(function(branch) {
    branch.addEventListener("click", selectBranchName);
});

// Function to filter branch list based on search input
function filterBranchList() {
    var searchInput = document.getElementById("searchSalaryBranch");
    var listItems = document.getElementById("branchItemsId").querySelectorAll(".form-item");
    var searchText = searchInput.value.trim().toLowerCase();

    listItems.forEach(function(item) {
        var branchName = item.querySelector(".branch-name").textContent.toLowerCase();
        if (branchName.includes(searchText)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}

// Event listener for search input
document.getElementById("searchSalaryBranch").addEventListener("input", filterBranchList);