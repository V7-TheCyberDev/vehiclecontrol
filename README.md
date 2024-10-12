


V7-VehControl



روح qb-radialmenu\client\main.lua بعدين حط 

local function SetupVehicleMenu()
    local VehicleMenu = {
        id = "ControlVehcile", --'control',
        title = 'VehicleControl',
        icon = 'car',
        type = 'client',
        event = "V7-VehControl:show", --'V7-VehControl:show*',
       shouldClose = true,
    }

    local ped = PlayerPedId()
    local Vehicle = GetVehiclePedIsIn(ped) ~= 0 and GetVehiclePedIsIn(ped) or getNearestVeh()
   

    if Vehicle == 0 then                 --fixed for new vehcontrol
        if vehicleIndex then
            RemoveOption(vehicleIndex)
            vehicleIndex = nil
        end
    else
        vehicleIndex = AddOption(VehicleMenu, vehicleIndex)
    end
end 
