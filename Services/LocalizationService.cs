//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.

//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DNNDave.Modules.IonicToDo.Services
{
    using DotNetNuke.Common.Utilities;
    using DotNetNuke.Services.Localization;
    using DNNDave.Modules.IonicToDo.ViewModels;
    using System.Diagnostics.CodeAnalysis;
    using System.Web.Hosting;
    using System.Threading;
    using static DNNDave.Modules.IonicToDo.ViewModels.LocalizationViewModel;

    /// <summary>
    /// Provides strongly typed localization services for this module.
    /// </summary>
    [ExcludeFromCodeCoverage]
    public class LocalizationService : ILocalizationService
    {
        private readonly ILocalizationProvider localizationProvider;
        private readonly LocalizationViewModel viewModel;
        private readonly string cacheKey;
        private string resourceFileRoot;

        private string ResourceFileRoot
        {
            get
            {
                if (string.IsNullOrWhiteSpace(this.resourceFileRoot))
                {
                    this.resourceFileRoot = HostingEnvironment.MapPath(
                        "~/DesktopModules/DNN.IonicToDo/resources/App_LocalResources/");
                }

                return this.resourceFileRoot;
            }
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="LocalizationService"/> class.
        /// </summary>
        public LocalizationService()
        {
            this.localizationProvider = new LocalizationProvider();
            this.cacheKey = "DNNDave.Modules.IonicToDo" + "_Localization_" + Thread.CurrentThread.CurrentCulture;
            this.viewModel = new LocalizationViewModel();
            var viewModel = DataCache.GetCache<LocalizationViewModel>(this.cacheKey);
            if (viewModel is null)
            {
                viewModel = this.HydrateViewModel();
                DataCache.SetCache(this.cacheKey, viewModel);
            }
            this.viewModel = viewModel;
        }

        /// <summary>
        /// A viewmodel that strongly types all resource keys.
        /// </summary>
        public LocalizationViewModel ViewModel
        {
            get
            {
                return this.viewModel;
            }
        }

        private string GetString(string key, string file)
        {
            return this.localizationProvider.GetString(key, this.ResourceFileRoot + file);
        }

        private LocalizationViewModel HydrateViewModel()
        {
            var modelvalidation = new ModelValidationInfo
            {
                IdGreaterThanZero = this.GetString("IdGreaterThanZero", "ModelValidation.resx"),
                NameRequired = this.GetString("NameRequired", "ModelValidation.resx"),

            };
            viewModel.ModelValidation = modelvalidation;
            var ui = new UIInfo
            {
                AddItem = this.GetString("AddItem", "UI.resx"),
                Cancel = this.GetString("Cancel", "UI.resx"),
                Create = this.GetString("Create", "UI.resx"),
                Delete = this.GetString("Delete", "UI.resx"),
                DeleteItemConfirm = this.GetString("DeleteItemConfirm", "UI.resx"),
                Description = this.GetString("Description", "UI.resx"),
                Edit = this.GetString("Edit", "UI.resx"),
                LoadMore = this.GetString("LoadMore", "UI.resx"),
                Name = this.GetString("Name", "UI.resx"),
                No = this.GetString("No", "UI.resx"),
                Save = this.GetString("Save", "UI.resx"),
                SearchPlaceholder = this.GetString("SearchPlaceholder", "UI.resx"),
                ShownItems = this.GetString("ShownItems", "UI.resx"),
                Yes = this.GetString("Yes", "UI.resx"),

            };
            viewModel.UI = ui;
            return viewModel;

        }
    }
}

