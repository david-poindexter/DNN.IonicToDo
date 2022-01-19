// MIT License
// Copyright DNN Dave
using DNNDave.Modules.IonicToDo.ViewModels;

namespace DNNDave.Modules.IonicToDo.Services
{
    /// <summary>
    /// Provides strongly typed localization services for this module.
    /// </summary>
    public interface ILocalizationService
    {
        /// <summary>
        /// Gets viewmodel that strongly types all resource keys.
        /// </summary>
        LocalizationViewModel ViewModel { get; }
    }
}